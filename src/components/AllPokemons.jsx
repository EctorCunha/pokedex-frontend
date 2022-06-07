import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export function AllPokemons() {
    const [pokemons, setPokemons] = useState([]);
    const [filters, setFilters] = useState({
        limit: 18,
        offset: 0
    })

    function fetchPokemons() {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${filters.limit}&offset=${filters.offset}`)
        .then(response => {
            const ids = response.data.results.map(r => r.url.substr(34).replace('/', ''));
            const promises = ids.map(id => fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.json()))
            Promise.all(promises).then(results => {
                const pokeList = results.map(data => ({
                    id: data.id,
                    name: data.name,
                    image: data.sprites.other.dream_world.front_default,
                    types: data.types
                }));
                setPokemons(pokeList);
            });
        })
    }

    useEffect(() => {
        fetchPokemons();
    }, [filters])

    function prevPagination() {
        const {limit, offset} = filters;
        if (offset - limit < 0) return;
        setFilters({ ...filters, offset: offset - limit })
    }

    function nextPagination() {
        const {limit, offset} = filters;
        setFilters({ ...filters, offset: offset + limit })
    }

    return (
        <Slider
        dots={true}
        appendDots={3}
        >
        <div >
            <h1>Pokemons</h1>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)'}}>

            {pokemons.map(pokemon => (
                <div key={pokemon.id}>
                    <h3>{pokemon.name} - {pokemon.id}</h3>
                    <img height="80px" src={pokemon.image} alt={pokemon.name} />
                    <ul>
                        {pokemon.types.map(type => <li key={type.name}>{type.type.name}</li>)}
                    </ul>
                </div>
            ))}
{/* 
            <button onClick={prevPagination}>Back</button>
            <button onClick={nextPagination}>Next</button> */}
            </div>
            </div>
        </Slider>
    )

}