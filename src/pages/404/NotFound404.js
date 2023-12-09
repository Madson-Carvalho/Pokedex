import './NotFound404.css';

import snorlax from '../../assets/images/snorlax.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';

const NotFound404 = () => {
    return (
        <div className='not-found'>
            <div className='content404'>
                <p>4</p>
                <img src={snorlax} />
                <p>4</p>
            </div>
            <h2>Not Found</h2>
            <p>Ooops... Parece que você procurou uma página que não existe :( ...</p>
            <Link to={'/pokemon'}><FontAwesomeIcon icon={faGamepad}/> POKÉMONS</Link>
        </div>
    )
}

export default NotFound404;