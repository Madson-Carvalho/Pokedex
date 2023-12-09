import './PokeCardTop.css';

const PokeCardTop = ({ type, colorName, backgroundColor }) => {
    return (
        <div className="top">
            <div className='pokemon-type'>
                <h6>Types: </h6>
                <p>{type.map((x, i) => ` ${i > 0 ? '-' : ''} ${x.type.name}`)}</p>
            </div>
            <div className='pokemon-color'>
                <h6>{colorName}</h6>
                <div className="color" style={{ backgroundColor: backgroundColor }}></div>
            </div>
        </div>
    )
}

export default PokeCardTop;