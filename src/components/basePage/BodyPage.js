import './BodyPage.css'

const BodyPage = (props) => {
    return (
        <section className='body-page'>
            {props.children}
        </section>
    )
}

export default BodyPage;