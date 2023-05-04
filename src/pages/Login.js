import classes from "./Login.module.css"
import google from "../assets/google-icon.png"
import apple from "../assets/apple.png"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { auth, app } from "../firebase"
import { useDispatch } from "react-redux"
import { SetToken, SetUser } from "../redux/userSlice"
import { signInWithEmailAndPassword, getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState("")
    const [pwd, setPwd] = useState("")

    const [error, setError] = useState(false)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePwdChange = (e) => {
        setPwd(e.target.value)
    }


    const gAuth = getAuth()
    const provider = new GoogleAuthProvider();

    const googleSignIn = () => {

        signInWithPopup(gAuth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)


                sessionStorage.setItem('authToken', result._tokenResponse.refreshToken)
                dispatch(SetToken(result._tokenResponse.refreshToken))
                dispatch(SetUser(user))
                navigate("/")
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);

                setError(true)
                // ...
            });

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, pwd)
            .then((userCredential) => {
                // Signed in
                sessionStorage.setItem('authToken', userCredential._tokenResponse.refreshToken)
                dispatch(SetToken(userCredential._tokenResponse.refreshToken))
                // console.log(userCredential)
                const user = userCredential.user;
                dispatch(SetUser(user))
                navigate("/")
                // console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // console.log(errorCode, errorMessage)
                setError(true)
            });
    }
    return (
        <div className={classes["login-page"]}>
            <div className={classes.banner}>
                <h1>Board.</h1>
            </div>
            <div className={classes.login}>
                <div>
                    <h2 className={classes.heading}>Sign In</h2>
                    <p className={classes.subtext}>Sign in to your account</p>
                    <div className={classes["sigin-btns"]}>
                        <button onClick={googleSignIn} className={classes.btn}>
                            <img className={classes.icon} src={google} alt="" />
                            Sign in with Google
                        </button>
                        <button className={classes.btn}>
                            <img className={classes.icon} src={apple} alt="" />
                            Sign in with Apple
                        </button>

                    </div>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <div className={classes["input-container"]}>
                            <label htmlFor="email">Email address</label>
                            <input value={email} onChange={handleEmailChange} type="email" id="email" />
                        </div>
                        <div className={classes["input-container"]}>
                            <label htmlFor="password">Password</label>
                            <input value={pwd} onChange={handlePwdChange} type="password" id="password" />
                        </div>
                        <p className={classes["form-text"]}>Forgot password?</p>
                        <button> Sign in</button>
                    </form>
                    <p className={classes["register-text"]}>Don’t have an account? <Link to="/register">Register here</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login