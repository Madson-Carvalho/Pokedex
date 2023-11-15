import { Link } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Nav() {
    return (
        <nav>
            <Link to="#" ><FontAwesomeIcon icon="fa-solid fa-house" style={{color: "#ffffff",}} /></Link>
            <Link to="#" ></Link>
            <Link to="#" ></Link>
            <Link to="#" ></Link>
        </nav>
    )
}

export default Nav;