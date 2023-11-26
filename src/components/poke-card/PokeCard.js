import './PokeCard.css';

const PokeCard = ({pokeData}) => {
    const capitalizeFirstLetter = (string) => {
        return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
    }

    const getSecondColor = (primaryColor) => {
        const colors = {
            "black": 'black',
            "blue": '#01CEFF',
            "brown": '#B3711B',
            "gray": '#D8D0C8',
            "green": '#64E36E',
            "pink": '#FF7D8D',
            "purple": '#D878D3',
            "red": '#FF5656',
            "white": '#C4C4C4',
            "yellow": '#FFFC5B'
        }

        return colors[`${primaryColor}`];
    }

    const style = {
        backgroundImage: `linear-gradient(${pokeData.color}, ${getSecondColor(pokeData.color)})`
    }

    return (
        <div className={`card ${pokeData.color}`} style={style}>
            <div className="content">
                <div className="top">
                    <p>{capitalizeFirstLetter(pokeData.types[0].type.name)}</p>
                    <div className="color" style={{backgroundColor:pokeData.color}}></div>
                </div>
                <div className="middle">
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