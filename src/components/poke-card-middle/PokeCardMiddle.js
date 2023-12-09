import './PokeCardMiddle.css';

const PokeCardMiddle = ({style, name, imagePath}) => {
    return (
        <div className="middle" style={style}>
            <div>
                <p>Name:</p>
                <p>{name}</p>
            </div>
            <img src={imagePath} />
        </div>
    )
}

export default PokeCardMiddle;