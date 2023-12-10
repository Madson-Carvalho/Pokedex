import './PokeModal.css';

import PokeStatistics from '../poke-statistics/PokeStatistics';
import ModalContent from '../modal-content/ModalContent';
import PokeEvolution from '../poke-evolution/PokeEvolution';

const PokeModal = ({ setIsOpen, selectedPokemon }) => {
    const capitalizeFirstLetter = (string) => {
        return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
    }

    return (
        <>
            <div className="darkBG" onClick={() => setIsOpen(false)} />
            <div className="centered">
                <div className="modal">
                    <div className="modalHeader" style={{ background: selectedPokemon.color }}>
                        <h5 className="heading">{capitalizeFirstLetter(selectedPokemon.name)}</h5>
                    </div>
                    <p>{selectedPokemon.base_experience}</p>
                    <button className="closeBtn" onClick={() => setIsOpen(false)}>
                        x
                    </button>
                    <ModalContent selectedPokemon={selectedPokemon} />
                    <div className='modal-statistics'>
                        {selectedPokemon.stats.map((stats, index) => (
                            <PokeStatistics key={index} title={capitalizeFirstLetter(stats.stat.name)} baseStat={stats.base_stat} />
                        ))}
                    </div>
                    <PokeEvolution pokemon={selectedPokemon} />
                </div>
            </div>
        </>
    );
};

export default PokeModal;