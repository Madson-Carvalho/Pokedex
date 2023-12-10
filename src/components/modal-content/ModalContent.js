import './ModalContent.css';

import PersonalIcon from '../personal-icon/PersonalIcon';

const ModalContent = ({ selectedPokemon }) => {
    const capitalizeFirstLetter = (string) => {
        return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
    }

    return (
        <div className="modalContent">
            <img src={selectedPokemon.sprites.other.dream_world.front_default} />
            <div className='poke-types'>
                <h6>Types:</h6>
                <div>
                    {selectedPokemon.types.map((type) => (
                        type.slot === 1 ? <p key={type.slot}><strong>Main:</strong> {capitalizeFirstLetter(type.type.name)}
                            <PersonalIcon name={type.type.name} customHeight={'1.3rem'} /></p> :
                            <p key={type.slot}><strong>Secondary:</strong> {capitalizeFirstLetter(type.type.name)}
                                <PersonalIcon name={type.type.name} customHeight={'1.3rem'} /></p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ModalContent;