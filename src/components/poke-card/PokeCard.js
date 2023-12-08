import './PokeCard.css';

import getSecondariesColors from '../../utils/getSecondariesColors';

import PokeStatistics from './../poke-statistics/PokeStatistics';

const PokeCard = ({ pokeData }) => {
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
                    <div className="color" style={{ backgroundColor: pokeData.color }}></div>
                </div>
                <div className="middle" style={middleStyle}>
                    <div>
                        <p>Name:</p>
                        <p>{capitalizeFirstLetter(pokeData.name)}</p>
                    </div>
                    <img src={pokeData.sprites.other.official_artwork.front_default} />
                </div>
                <div className="bottom">
                    {pokeData.stats.map((stats, index) => (
                        index < 3 && <PokeStatistics title={capitalizeFirstLetter(stats.stat.name)} baseStat={stats.base_stat} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PokeCard;