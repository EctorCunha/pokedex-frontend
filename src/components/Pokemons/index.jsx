import { Box, Modal, Typography, Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import "./pokemon";
import {
  Buttons,
  Card,
  Cards,
  Input,
  InputButton,
  Search,
  SearchComponent,
  Title,
  Story,
} from "./pokemon";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  height: 350,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "10px",
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
  // const pokemonFiltered = useMemo(() => {
  //   return pokemons.filter((pokemon) => pokemon.includes(busca));
  // }, [busca]);

  const handleSearch = (busca) => {
    api.get(`/pokemon/${busca}`).then((res) => {
      setBusca(res.data);
    });
  };

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
  //---------------------------------------------------- Que API complexa, viu?! -------------------------------------------------//

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

  //============= Retorno do componente
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
            onClick={() => handleSearch(busca)}
          />
        </Search>
      </SearchComponent>

      <section>
        <Cards
          style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }}
        >
          {pokemons.map((pokemon) => (
            <Card onClick={handleOpen}>
              <Modal open={open} onClose={handleClose} hideBackdrop={true}>
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

              {/* Normal */}
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

          {/* <Story>
            {handleSearch
              ? pokemons.map((pokemon) => (
                  <>
                    <div>Nome: {pokemon.name}</div>
                    <div>Peso: {pokemon.weight}</div>
                    <img src={pokemon.id} alt={pokemon.name} />
                    <p>Order: {pokemon.order}</p>
                    <p>XP: {pokemon.base_experience}</p>
                    <p>Altura: {pokemon.height}</p>
                  </>
                ))
              : alert("Este pokemon não existe")}
          </Story> */}
          

          {/* Filtrado */}
          {/* {pokemonFiltered ? (pokemons.map((pokemon) => (
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
            ))):("Pokemon não encontrado")} */}
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
