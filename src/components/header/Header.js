import img from "../../images/International_Pokémon_logo.svg.png"
import Nav from "../nav/Nav";

function Header() {
    return (
        <header>
            <div>
               <img src={img}/> 
            </div>
            <Nav/>
        </header>
    )
}

export default Header;
