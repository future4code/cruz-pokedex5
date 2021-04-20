import React from "react";
import { useHistory } from "react-router-dom";
import { goToLastPage, goToPokedexPage } from "../routes/coordinator";
import Header from "../components/Header";

const HomePage = () => {
  const history = useHistory();

  return (
    <>
      <Header
        title="LISTA DE POKEMONS (VINDO DA API)"
        name="Ver minha POKEDEX"
      />
      <p>Pokedex</p>
      <button onClick={() => goToPokedexPage(history)}>Pokedex</button>
      <button onClick={() => goToLastPage(history)}>Voltar</button>
    </>
  );
};

export default HomePage;
