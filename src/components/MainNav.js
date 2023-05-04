import search from "../assets/Search_icon.png"
import bell from "../assets/notifications_icon.png"
import user from "../assets/user_img.png"

const MainNav = () => {
    return (

        <nav className="main-nav">
            <h2 className="main-nav-heading">Dashboard</h2>
            <div className="main-nav-section">
                <div className="main-nav-search">
                    <input type="text" placeholder="Search..." />
                    <img src={search} alt="search" />
                </div>
                <img className="notifications" src={bell} alt="notifications" />
                <img className="user" src={user} alt="user" />

            </div>
        </nav>

    )
}

export default MainNav