import React from "react";
import { useHistory } from "react-router-dom";
import { goToLastPage, goToDetailsPage } from "../routes/coordinator";

const PokedexPage = () => {
    const history = useHistory();
  
    return (
      <>
        <p>Pokedex</p>
        <button onClick={() => goToDetailsPage(history)}>Detalhes</button>
        <button onClick={() => goToLastPage(history)}>Voltar</button>
      </>
    );
  };
  
  export default PokedexPage;