import { NavLink } from "react-router-dom"


const SideLink = ({ link }) => {
    const { title, icon } = link
    return (
        <NavLink to="/">

            <li>
                <img src={icon} alt="icon" />
                <span>{title}</span>
            </li>
        </NavLink>

    )
}

export default SideLink