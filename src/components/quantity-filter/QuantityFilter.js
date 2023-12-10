import './QuantityFilter.css';

import { useState } from 'react';

const QuantityFilter = ({setPokeQuantity, quantity}) => {
    const [inputValue, setInputValue] = useState();

    const handleOnChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleClick = () => {
        setPokeQuantity(inputValue);
    }

    return (
        <div className='filterNumber'>
            <p><strong>Quantidade: </strong>{quantity}</p>
            <input
                type="number"
                name="number"
                maxLength={1292}
                min={0}
                max={1292}
                placeholder="Busque por mais Pokémons"
                onChange={handleOnChange}
            />
            <button onClick={handleClick}>Buscar</button>
        </div>
    )
}

export default QuantityFilter;