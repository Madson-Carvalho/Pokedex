import './Home.css'
import BodyPage from '../../components/basePage/BodyPage';
import Header from '../../components/header/Header';
import image from '../../images/Pokemon.jpg';

function Home() {
    return (
        <div>
            <Header />
            <BodyPage>
                <div className='home'>
                    <img src={image} />
                    <div>
                        <h1>Pokémon</h1>
                        <p>Pronto para embarcar numa jornada Pokémon épica? Desbrave o mundo e descubra criaturas incríveis com o nosso Pokédex - sua porta de entrada para aventuras inesquecíveis!</p>
                    </div>
                </div>
            </BodyPage>
        </div>
    )
}

export default Home;
