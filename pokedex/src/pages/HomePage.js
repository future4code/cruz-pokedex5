import React from "react";
import { useHistory } from "react-router-dom";
import { goToLastPage, goToPokedexPage } from "../routes/coordinator";

const HomePage = () => {
    const history = useHistory();
  
    return (
      <>
        <p>Pokedex</p>
        <button onClick={() => goToPokedexPage(history)}>Pokedex</button>
        <button onClick={() => goToLastPage(history)}>Voltar</button>
      </>
    );
  };
  
  export default HomePage;