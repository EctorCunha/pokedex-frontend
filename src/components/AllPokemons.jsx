import { Box, Modal, Typography, Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";

const SearchComponent = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 3rem;
  margin-top: 5rem;
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

const Buttons = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15vw;
  padding: 0.6rem;
  background-color: green;
  border: none;
  border-radius: 7px;
  cursor: pointer;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 180px;
  background-color: aqua;
  border-radius: 7px;
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.6rem;
`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  height: 350,
  bgcolor: "background.paper",
  border: "none",
  borderRadius:'10px',
  boxShadow: 1,
  p: 4,
};

export function AllPokemons() {

  //============= Estado para o dado principal
  const [pokemons, setPokemons] = useState([]);
  //============= Estado para filtros
  const [filters, setFilters] = useState({
    limit: 18,
    offset: 0,
  });

  //============= Estados para modais
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //     //============= Pesquisa
    const [busca, setBusca] = useState("");
      //Pesquisa
    const pokemonFiltered = useMemo(() => {
      return pokemons.filter((pokemon) => pokemon.includes(busca));
    }, [busca]);

  //============= Função para junção e paginação dos pokemons
  function fetchPokemons() {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon?limit=${filters.limit}&offset=${filters.offset}`
      )
      .then((response) => {
        const ids = response.data.results.map((r) =>
          r.url.substr(34).replace("/", "")
        );
        const promises = ids.map((id) =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) =>
            res.json()
          )
        );
        Promise.all(promises).then((results) => {
          const pokeList = results.map((data) => ({
            id: data.id,
            name: data.name,
            image: data.sprites.other.dream_world.front_default,
            types: data.types,
          }));
          setPokemons(pokeList);
        });
      });
  }

  //============= Componente de renderização (fica escutando)
  useEffect(() => {
    fetchPokemons();
  }, [filters]);

  //============= Funções para passar ou retornar páginas
  function prevPagination() {
    const { limit, offset } = filters;
    if (offset - limit < 0) return;
    setFilters({ ...filters, offset: offset - limit });
  }
  function nextPagination() {
    const { limit, offset } = filters;
    setFilters({ ...filters, offset: offset + limit });
  }

  //============= Retorno
  return (
    <div>
      <SearchComponent>
        <Title>Mais de 250 Pokemons para você escolher o seu favorito</Title>
        <Search>
          <Input
            type="search"
            name="search"
            id="search"
            onChange={(e) => setBusca(e.target.value)}
          />
          <InputButton
            type="button"
            value={"Procurar"}
            // onClick={() => handleSearch(search)}
          />
        </Search>
      </SearchComponent>

      <section>
        <Cards
          style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)"}}
        >
          {pokemons.map((pokemon) => (
            <Card onClick={handleOpen}>
              <Modal
                open={open}
                onClose={handleClose}
                hideBackdrop={true}
              >
                <Box sx={style}>
                  <h3>{pokemon.name}</h3>
                  <img
                    style={{ margin: ".8rem 0" }}
                    height="80px"
                    src={pokemon.image}
                    alt={pokemon.name}
                  />
                  <ul>
                    {pokemon.types.map((type) => (
                      <div style={{ display: "flex", width: "100%" }}>
                        <li
                          key={type.name}
                          style={{ display: "flex", listStyleType: "none" }}
                        >
                          {type.type.name}
                        </li>
                      </div>
                    ))}
                  </ul>
                </Box>
              </Modal>

              <h3>{pokemon.name}</h3>
              <img
                style={{ margin: ".8rem 0" }}
                height="80px"
                src={pokemon.image}
                alt={pokemon.name}
              />
              <ul>
                {pokemon.types.map((type) => (
                  <div style={{ display: "flex", width: "100%" }}>
                    <li
                      key={type.name}
                      style={{ display: "flex", listStyleType: "none" }}
                    >
                      {type.type.name}
                    </li>
                  </div>
                ))}
              </ul>
            </Card>
          ))}

          {/* {pokemonFiltered.map((pokemon) => (
              <div key={pokemon.id}>
                <h3>
                  {pokemon.name} - {pokemon.id}
                </h3>
                <img height="80px" src={pokemon.image} alt={pokemon.name} />
                <ul>
                  {pokemon.types.map((type) => (
                    <li key={type.name}>{type.type.name}</li>
                  ))}
                </ul>
              </div>
            ))} */}
        </Cards>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "3rem",
            marginTop: "3rem",
          }}
        >
          <Buttons onClick={prevPagination}>Back</Buttons>
          <Buttons onClick={nextPagination}>Next</Buttons>
        </div>
      </section>
    </div>
  );
}
