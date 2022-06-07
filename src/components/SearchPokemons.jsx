import { useState } from "react";
import { api } from "../service/api";
import styled from "styled-components";
import searchIcon from "../Assets/Images/searchIcon.svg";

const SearchComponent = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  
`;

const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: normal;
  `;

const Input = styled.input`
  width: 65vw;
  padding: 1rem;
  border: 1px solid #efe8e8;
  border-radius: 20px;
  filter: drop-shadow(0px 4px 4px #bdb8b8);
  `;

const InputButton = styled.input`
  width: 5vw;
  padding: 0.7rem;
  border: 1px solid #0003;
  border-radius: 7px;
  margin-left: 1rem;
  cursor: pointer;
  
  &:hover {
    background-color: gray;
  }
  `;

  const Story = styled.div`
    display: flex;
    justify-content: center;
  `;

export function SearchPokemons({ handleSearch }) {
  const [search, setSearch] = useState("");
  //Pesquisa
  const [pokemon, setPokemon] = useState([]);

  // Pesquisa
  function handleSearch(search) {
    api.get(`/pokemon/${search}`).then((res) => {
      setPokemon(res.data);
    });
  }

  return (
    <SearchComponent>
        <Title>Mais de 250 Pokemons para você escolher o seu favorito</Title>
      <Search>
        <Input
          type="search"
          name="search"
          id="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <InputButton
          src={searchIcon}
          type="button"
          onClick={() => handleSearch(search)}
        />
      </Search>

      {/* Pesquisa */}
      <Story>
        {pokemon ? (
          <>
            <div>Nome: {pokemon.name}</div>
            <div>Peso: {pokemon.weight}</div>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              alt={pokemon.name}
            />
            <p>Order: {pokemon.order}</p>
            <p>XP: {pokemon.base_experience}</p>
            <p>Altura: {pokemon.height}</p>
          </>
        ) : (
          alert("Este pokemon não existe")
        )}
      </Story>
    </SearchComponent>
  );
}
