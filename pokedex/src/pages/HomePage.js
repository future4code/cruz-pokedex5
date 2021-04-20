import React from "react";
import { useHistory } from "react-router-dom";
import { goToLastPage, goToPokedexPage } from "../routes/coordinator";
import Header from "../components/Header";

const HomePage = (props) => {
  const history = useHistory();

  return (
    <>
      <Header
        title="LISTA DE POKEMONS (VINDO DA API)"
        name="Ver minha POKEDEX"
        page={() => goToPokedexPage(history)}
      />
    </>
  );
};

export default HomePage;
