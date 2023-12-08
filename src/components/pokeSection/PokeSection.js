import './PokeSection.css';
import getSecondariesColors from './../../utils/getSecondariesColors';

const PokeSection = (props) => {
    return (
        <section className='pokeSection' style={{backgroundColor:getSecondariesColors(props.background).sectionColor}}>
            {props.children}
        </section>
    )
}

export default PokeSection;