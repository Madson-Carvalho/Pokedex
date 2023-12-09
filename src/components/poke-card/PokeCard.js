import './PokeCard.css';

import getSecondariesColors from '../../utils/getSecondariesColors';

import PokeStatistics from './../poke-statistics/PokeStatistics';
import PokeCardMiddle from '../poke-card-middle/PokeCardMiddle';
import PokeCardTop from '../poke-card-top/PokeCardTop';

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
                <PokeCardTop type={pokeData.types}
                    backgroundColor={pokeData.color} colorName={pokeData.color} />
                <PokeCardMiddle name={capitalizeFirstLetter(pokeData.name)} style={middleStyle}
                    imagePath={pokeData.sprites.other.official_artwork.front_default} />
                <div className="bottom">
                    {pokeData.stats.map((stats, index) => (
                        index < 3 && <PokeStatistics key={index} title={capitalizeFirstLetter(stats.stat.name)} baseStat={stats.base_stat} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PokeCard;