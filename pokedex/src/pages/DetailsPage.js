import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { goToLastPage } from "../routes/coordinator";

const Button = styled.button`
  width: 150px;
  padding: 10px;
  border: none;
  border-radius: 6px;
  background-color: #596d82;
  color: #ffffff;
  cursor: pointer;
  :hover {
    background-color: #85a1ca;
  }
  display: block;
  margin: 0 auto;
`;

const DetailsPage = () => {
  const history = useHistory();

  return (
    <>
      <Header
        title="NOME DO POKEMON"
        name="Voltar"
        page={() => goToLastPage(history)}
      />
      <Button>Adicionar/Remover da pokedex</Button>
    </>
  );
};

export default DetailsPage;
