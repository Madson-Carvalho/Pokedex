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
                    <p>Criamos experiências a um nível totalmente novo com nossa linha de Pokédex.
                        Prepare-se para explorar um novo universo
                        onde a captura de criaturas extraordinárias se torna realidade.</p>
                </section>
                <section className='imgAbout'>
                    <img src={imgPoke} />
                    <div>
                        <p>
                            Na essência da Innov3 Minds, reside um compromisso inabalável com a vanguarda tecnológica.
                            Nossa equipe de especialistas reúne mentes criativas, apaixonadas por desafios,
                            e trabalhamos incansavelmente para transformar ideias em soluções práticas e inovadoras.
                            Desde o desenvolvimento de software personalizado até estratégias de inteligência artificial,
                            nossa missão é impulsionar a evolução digital.</p>
                        <p>Os Pokédex Innov3 Minds: Uma Jornada no Universo Pokémon:
                            Dentro de nossas inovações mais recentes, destacam-se os Pokédex, uma ode ao universo encantador dos Pokémon.
                            Nossa equipe dedicou esforços para criar uma plataforma que não apenas celebra a vastidão dos Pokémon,
                            mas também oferece uma experiência envolvente e educacional.</p>
                    </div>
                </section>
                <section className='aboutUs'>
                    <h1>Sobre nós</h1>
                    <div>
                        <AboutCard title={"Realização"} description={"A Innov3 Minds, converge tecnologia e paixão por Pokémons, e faz o lançamento do seu Pokédex uma divertida brincadeira."} />
                        <AboutCard title={"Criatividade"} description={"A criação do nosso Pokédex é um testemunho da grandeza criativa da Innov3 Minds. Cada detalhe, desde o design envolvente dos cards até a implementação. "} />
                        <AboutCard title={"Comunidade"} description={"A vibrante comunidade de entusiastas que compartilham a paixão pelos Pokémon e pela inovação tecnológica é o coração pulsante da Innov3 Minds."} />
                    </div>
                </section>
            </BodyPage>
            <Footer />
        </div>
    )
}

export default About;