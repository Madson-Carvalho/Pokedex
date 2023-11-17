import img from "../../images/International_Pokémon_logo.svg.png"
import Nav from "../nav/Nav";
import './Header.css';

function Header() {
    return (
        <header>
            <div className="img">
               <img src={img}/> 
            </div>
            <Nav/>
        </header>
    )
}

export default Header;
