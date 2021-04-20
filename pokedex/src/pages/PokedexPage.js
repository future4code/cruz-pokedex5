import React from "react";
import { useHistory } from "react-router-dom";
import { goToLastPage, goToDetailsPage } from "../routes/coordinator";
import Header from "../components/Header";
import styled from "styled-components";

const PokedexPage = () => {
  const history = useHistory();

  return (
    <>
      <Header title="POKEDEX" name="Voltar para lista de pokemons" />
      <p>Pokedex</p>
      <button onClick={() => goToDetailsPage(history)}>Detalhes</button>
      <button onClick={() => goToLastPage(history)}>Voltar</button>
    </>
  );
};

export default PokedexPage;
