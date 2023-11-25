import './PokeCard.css';

const PokeCard = () => {
    return (
        <div class="card">
            <div class="content">
                <div class="top">
                    <p>Orange</p>
                    <div class="color"></div>
                </div>
                <div class="middle">
                    <div>
                        <p>#F9BC61</p>
                        <p>Charizard</p>
                    </div>
                    <img src="https://www.smashbros.com/wiiu-3ds/images/character/lizardon/main.png" />
                </div>
                <div class="bottom">
                    <div>
                        <p>Hue</p>
                        <p>36</p>
                    </div>
                    <div>
                        <p>Sat</p>
                        <p>93</p>
                    </div>
                    <div>
                        <p>Lum</p>
                        <p>68</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokeCard;