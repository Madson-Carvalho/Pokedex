import './PokemonPage.css';

import { useEffect, useState } from 'react';

import BodyPage from './../../components/basePage/BodyPage';
import Header from './../../components/header/Header';
import Footer from './../../components/footer/Footer';
import PokeCard from '../../components/poke-card/PokeCard';

import httpRequest from '../../utils/http';
import PokeSection from '../../components/pokeSection/PokeSection';

const PokemonPage = () => {
    //Uma lista vazia similar um getter e setter
    const [pokemonData, setPokemonData] = useState([]);

    //Executa uma vez só para buscar os dados dos pokemons e atribuir a váriável pokemonData
    useEffect(() => {
        async function getData() {
            //variável data chama o http request que faz a chamada da API e recupera os dados retornados por ela
            const data = await httpRequest('https://pokeapi.co/api/v2/pokemon/?limit=150');
            //Função que busca os dados individuais dos pokemons com base no retorno da variavel data
            await getPokemonFullData(data.results);
        }
        getData();
    }, [])

    const getPokemonFullData = async (initialData) => {
        //aqui o bagulho fica louco
        //fullData tem um map(for que modifica os dados de um array) que percorre cada dado retornado da api {nome e link de onde pegar os dados completos}
        const fullData = await Promise.all(initialData.map(async (element) => {
            //response é uma variavel que busca os dados individuais de cada pokemon e guarda seu valor
            const response = await httpRequest(element.url);
            //color a partir dos dados de response busca a cor de cada pokemon individualmente
            const color = await httpRequest(response.species.url);
            //adiciona um novo atributo cor em response com o nome da cor do pokemon
            response.color = color.color.name;
            response.sprites.other.official_artwork = response.sprites.other['official-artwork'];
            delete response.sprites.other['official-artwork'];
            return response;
        }));
        //adiciona os dados dos pokemons na variavel pokemonData agrupados por cor
        setPokemonData(groupPokemonsByColor(fullData));
    }

    const groupPokemonsByColor = (data) => {
        return Object.values(data.reduce((acc, pokeData) => {
            if (!acc[pokeData.color]) {
                acc[pokeData.color] = [];
            }

            acc[pokeData.color].push(pokeData);

            return acc;
        }, {}));
    }
console.log(pokemonData)
    return (
        <>
            <Header />
            <BodyPage>
                <div className='cards'>
                    {/* for que percorre os dados do pokemon e pra cada pokemon na variável pokemonData
                    ele renderiza (mostra um pokeCard) e passa pra ele o dado do pokemon em questão */}
                    {pokemonData.map((pokemonOrderPerColor, index) => (
                        <PokeSection key={index} background={pokemonOrderPerColor[0].color} >
                            {pokemonOrderPerColor.map((data) => (
                                <PokeCard key={data.id} pokeData={data} />
                            ))}
                        </PokeSection>
                    ))}
                </div>
            </BodyPage>
            <Footer />
        </>
    )
}

export default PokemonPage;