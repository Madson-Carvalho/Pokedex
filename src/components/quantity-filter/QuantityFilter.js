import './QuantityFilter.css'

const QuantityFilter = () => {
    return (
        <div className='filterNumber'>
            <input type="number" name="number" maxLength="1292" placeholder="Busque por mais Pokémons" />
            <button>Buscar</button>
        </div>
        
    )
}

export default QuantityFilter;