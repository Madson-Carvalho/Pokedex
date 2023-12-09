import BodyPage from '../../components/basePage/BodyPage';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import imgPoke from '../../assets/images/pokemon_pictures.jpg';
import './About.css';
import AboutCard from '../../components/aboutCard/AboutCard';


const About = () => {
    return (
        <div>
            <Header />
            <BodyPage>
                <section className='aboutDescription'>
                    <h3>Somos a INNOV3 MINDS</h3>
                    <p>Criamos experiências a um nível totalmente novo com nossa linha de Pokedex.
                        Prepare-se para explorar um novo universo
                        onde a captura de criaturas extraordinárias se torna realidade.</p>
                </section>
                <section className='imgAbout'>
                    <img src={imgPoke} />
                    <div>
                        <p>Sobre a Inova Minds:
                            Na essência da Inova Minds, reside um compromisso inabalável com a vanguarda tecnológica.
                            Nossa equipe de especialistas reúne mentes criativas, apaixonadas por desafios,
                            e trabalhamos incansavelmente para transformar ideias em soluções práticas e inovadoras.
                            Desde o desenvolvimento de software personalizado até estratégias de inteligência artificial,
                            nossa missão é impulsionar a evolução digital.</p>
                        <p>Os Pokedex Inova Minds: Uma Jornada no Universo Pokémon:
                            Dentro de nossas inovações mais recentes, destacam-se os Pokedex, uma ode ao universo encantador dos Pokémon.
                            Nossa equipe dedicou esforços para criar uma plataforma que não apenas celebra a vastidão dos Pokémon,
                            mas também oferece uma experiência envolvente e educacional.</p>
                    </div>

                </section>
                <section className='aboutUs'>
                    <AboutCard title={"Realização"} description={"Na [Nome da Empresa], não apenas criamos jogos inovadores, mas também elevamos a experiência de entretenimento a um nível totalmente novo com nossa linha de Pokedex. Prepare-se para explorar um universo vasto e emocionante, onde a captura de criaturas extraordinárias se torna realidade."} />
                    <AboutCard title={"Realização"} description={"Na [Nome da Empresa], não apenas criamos jogos inovadores, mas também elevamos a experiência de entretenimento a um nível totalmente novo com nossa linha de Pokedex. Prepare-se para explorar um universo vasto e emocionante, onde a captura de criaturas extraordinárias se torna realidade."} />
                    <AboutCard title={"Realização"} description={"Na [Nome da Empresa], não apenas criamos jogos inovadores, mas também elevamos a experiência de entretenimento a um nível totalmente novo com nossa linha de Pokedex. Prepare-se para explorar um universo vasto e emocionante, onde a captura de criaturas extraordinárias se torna realidade."} />
                </section>
            </BodyPage>
            <Footer />
        </div>



    )

}

export default About;