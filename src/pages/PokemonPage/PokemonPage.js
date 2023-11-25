import './PokemonPage.css';

import { useEffect, useState } from 'react';

import BodyPage from './../../components/basePage/BodyPage';
import Header from './../../components/header/Header';
import Footer from './../../components/footer/Footer';
import PokeCard from '../../components/poke-card/PokeCard';

import httpRequest from '../../utils/http';

const PokemonPage = () => {
    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
        async function getData() {
            const data = await httpRequest('https://pokeapi.co/api/v2/pokemon/?limit=5');
            await getPokemonFullData(data.results);
        }
        getData();
    }, [])

    const getPokemonFullData = async (initialData) => {
        const fullData = await Promise.all(initialData.map(async (element) => {
            const response = await httpRequest(element.url);
            return response;
        }));

        setPokemonData(fullData);
    }
    
    return (
        <>
            <Header />
            <BodyPage>
                <div className='cards'>
                    <PokeCard />
                </div>
            </BodyPage>
            <Footer />
        </>
    )
}

export default PokemonPage;