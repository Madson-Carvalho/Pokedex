import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer>
            <p>&copy; INNOV3 MINDS</p>
            <p><FontAwesomeIcon icon={faPhone}/> Telefone: 48 9999-9999</p>
            <p><FontAwesomeIcon icon={faEnvelope}/> E-mail: email@pokedex.com</p>
        </footer>
    );
};

export default Footer;