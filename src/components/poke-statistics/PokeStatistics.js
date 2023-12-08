import './PokeStatistics.css';

const PokeStatistics = ({title, baseStat}) => {
    return (
        <div className="statistics">
            <p>{title}</p>
            <p>{baseStat}</p>
        </div>
    )
}

export default PokeStatistics;