import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { goToLastPage } from "../routes/coordinator";

const DetailsPage = () => {
  const history = useHistory();

  return (
    <>
      <Header title="NOME DO POKEMON" name="Voltar" />
      <button>Adicionar/Remover da pokedex</button>
      <p>Detalhes</p>
      <button onClick={() => goToLastPage(history)}>Voltar</button>
    </>
  );
};

export default DetailsPage;
