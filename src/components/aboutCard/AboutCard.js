import './AboutCard.css';

const AboutCard = ({title, description}) => {
    return (
        <section className='textCard'>
            <h1>{title}</h1>
            <p>{description}</p>
        </section>       
    )
}
   export default AboutCard; 