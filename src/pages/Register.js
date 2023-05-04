import classes from "./Register.module.css"
import google from "../assets/google-icon.png"
import apple from "../assets/apple.png"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { signInWithEmailAndPassword, getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, app } from "../firebase"
const Register = () => {

    const [email, setEmail] = useState("")
    const [pwd, setPwd] = useState("")

    const [error, setError] = useState(false)

    const navigate = useNavigate()

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePwdChange = (e) => {
        setPwd(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await createUserWithEmailAndPassword(auth, email, pwd)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;


                // handleReset()
                navigate("/login")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(true)
                // console.log(errorCode, errorMessage);



            });
    }

    return (
        <div className={classes["register-page"]}>
            <div className={classes.banner}>
                <h1>Board.</h1>
            </div>
            <div className={classes.register}>
                <div>
                    <h2 className={classes.heading}>Sign up</h2>
                    <p className={classes.subtext}>Create your account</p>

                    <form className={classes.form} onSubmit={handleSubmit}>
                        <div className={classes["input-container"]}>
                            <label htmlFor="email">Email address</label>
                            <input value={email} onChange={handleEmailChange} type="email" id="email" />
                        </div>
                        <div className={classes["input-container"]}>
                            <label htmlFor="password">Password</label>
                            <input value={pwd} onChange={handlePwdChange} type="password" id="password" />
                        </div>
                        <button>Sign up</button>
                    </form>
                    <p className={classes["register-text"]}>Already have an account? <Link to="/login">Login here</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Register