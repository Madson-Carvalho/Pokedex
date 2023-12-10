import './PokeEvolution.css';

const PokeEvolution = ({ pokemon }) => {
    console.log(pokemon)
    return (
        <div className='poke-evolution'>
            <p>Evolution:</p>
            <div className='evolution-content'>
                {pokemon.evolutions.map((evo) => (
                    evo.name &&
                    <div key={evo.name}>
                        <img src={evo.imageUrl} />
                        <p>{evo.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PokeEvolution;