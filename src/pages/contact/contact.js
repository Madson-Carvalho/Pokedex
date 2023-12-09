import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <Header />
            <div className='contactUs'>
                <form>
                    <h1>Fale Conosco</h1>
                    <input type="name" name="name" placeholder="Nome" />
                    <input type="surname" name="surname" placeholder="Sobrenome" />
                    <input type="email" name="email" placeholder="E-mail" />
                    <input id="idmessage" type="message" name="message" placeholder="Mensagem" />
                    <input id="idenviar" type="submit" value="Enviar" />
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;