import './PokemonPage.css';

import { useEffect, useState } from 'react';

import BodyPage from './../../components/basePage/BodyPage';
import Header from './../../components/header/Header';
import Footer from './../../components/footer/Footer';
import PokeCard from '../../components/poke-card/PokeCard';

import httpRequest from '../../utils/http';
import PokeSection from '../../components/pokeSection/PokeSection';
import PokeModal from '../../components/poke-modal/PokeModal';

const PokemonPage = () => {
    //Uma lista vazia similar um getter e setter
    const [pokemonData, setPokemonData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    //Executa uma vez só para buscar os dados dos pokemons e atribuir a váriável pokemonData
    useEffect(() => {
        async function getData() {
            //variável data chama o http request que faz a chamada da API e recupera os dados retornados por ela
            const data = await httpRequest('https://pokeapi.co/api/v2/pokemon/?limit=50');
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
            const specie = await httpRequest(response.species.url);
            const evolutionChain = await httpRequest(specie.evolution_chain.url);
            //adiciona um novo atributo cor em response com o nome da cor do pokemon
            response.color = specie.color.name;
            response.evolution_chain = evolutionChain;
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

    const openModal = (pokemon) => {
        pokemon.evolutions = getEvolutionChain(pokemon.evolution_chain);
        setSelectedPokemon(pokemon);
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const getEvolutionChain = (evolutionChain) => {
        const chain = [
            { name: evolutionChain.chain.species.name, imageUrl: getImageByName(evolutionChain.chain.species.name) },
            { name: evolutionChain.chain.evolves_to[0].species.name, imageUrl: getImageByName(evolutionChain.chain.evolves_to[0].species.name) },
            { name: evolutionChain.chain.evolves_to[0].evolves_to[0]?.species?.name, imageUrl: getImageByName(evolutionChain.chain.evolves_to[0].evolves_to[0]?.species.name) }
        ]
console.log(chain)
        return chain;
    }

    const getImageByName = (name) => {
        for (const subArray of pokemonData) {
            const foundPokemon = subArray.find(pokemon => pokemon.name === name);
        
            if (foundPokemon) {
              return foundPokemon.sprites.other.official_artwork.front_default;
            }
          }
        
          return null;
    }

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
                                <PokeCard key={data.id}
                                    pokeData={data}
                                    // setIsOpen={openModal}
                                    buttonColor={pokemonOrderPerColor[0].color}
                                    setIsOpen={() => openModal(data)} />
                            ))}
                        </PokeSection>
                    ))}
                </div>
                {isOpen && <PokeModal setIsOpen={closeModal} selectedPokemon={selectedPokemon} />}
            </BodyPage>
            <Footer />
        </>
    )
}

export default PokemonPage;