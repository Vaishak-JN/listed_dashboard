import dashboard from "../assets/dashboard_icon.png"
import transactions from "../assets/transactions_icon.png"
import schedules from "../assets/schedules_icon.png"
import users from "../assets/users_icon.png"
import settings from "../assets/settings_icon.png"
import SideLink from "./SideLink"
import { Link } from "react-router-dom"

const Links = [
    {
        title: "Dashboard",
        icon: dashboard
    },
    {
        title: "Transactions",
        icon: transactions
    },
    {
        title: "Schedules",
        icon: schedules
    },
    {
        title: "Users",
        icon: users
    },
    {
        title: "Settings",
        icon: settings
    },
]

const Sidebar = () => {
    return (
        <div className="sidebar">
            <header>
                <h2>Board.</h2>
            </header>
            <ul>
                {Links.map((link, i) => <SideLink key={link.title + i} link={link} />)}
            </ul>
            <footer>
                <ul>
                    <Link to="/"><li>Help</li></Link>
                    <Link to="/"><li>Contact Us</li></Link>
                </ul>
            </footer>
        </div>
    )
}

export default Sidebar