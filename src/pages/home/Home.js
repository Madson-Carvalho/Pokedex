import './Home.css';
import BodyPage from '../../components/basePage/BodyPage';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import image from '../../images/Pokemon.jpg';
import pikachu from '../../images/pokeball-removebg-preview.png';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <Header />
            <BodyPage>
                <div className='home'>
                    <img src={image} />
                    <div>
                        <div className='home-title'>
                            <img src={pikachu} />
                            <h1>Pokédex</h1>
                        </div>
                        <p>Pronto para embarcar numa jornada Pokémon épica? Desbrave o mundo e descubra criaturas incríveis com o nosso Pokédex - sua porta de entrada para aventuras inesquecíveis!</p>
                        <Link to='/pokemon'>Pokemons</Link>
                    </div>
                </div>
            </BodyPage>
            <Footer />
        </div>
    )
}

export default Home;
