import getSecondariesColors from '../../utils/getSecondariesColors';
import './PokeCard.css';

const PokeCard = ({pokeData}) => {
    const capitalizeFirstLetter = (string) => {
        return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
    }

    const style = {
        backgroundImage: `linear-gradient(${pokeData.color}, ${getSecondariesColors(pokeData.color).borderColor})`
    }

    const middleStyle = {
        backgroundImage: `linear-gradient(${getSecondariesColors(pokeData.color).pokeColor.mainColor}, ${getSecondariesColors(pokeData.color).pokeColor.secondaryColor} 75%)`
    }

    return (
        <div className={`card ${pokeData.color}`} style={style}>
            <div className="content">
                <div className="top">
                    <p>{capitalizeFirstLetter(pokeData.types[0].type.name)}</p>
                    <div className="color" style={{backgroundColor:pokeData.color}}></div>
                </div>
                <div className="middle" style={middleStyle}>
                    <div>
                        <p>Name:</p>
                        <p>{capitalizeFirstLetter(pokeData.name)}</p>
                    </div>
                    <img src={pokeData.sprites.other.official_artwork.front_default} />
                </div>
                <div className="bottom">
                    <div>
                        <p>{capitalizeFirstLetter(pokeData.stats[0].stat.name)}</p>
                        <p>{pokeData.stats[0].base_stat}</p>
                    </div>
                    <div>
                        <p>{capitalizeFirstLetter(pokeData.stats[1].stat.name)}</p>
                        <p>{pokeData.stats[1].base_stat}</p>
                    </div>
                    <div>
                        <p>{capitalizeFirstLetter(pokeData.stats[2].stat.name)}</p>
                        <p>{pokeData.stats[2].base_stat}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokeCard;