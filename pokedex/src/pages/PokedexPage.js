import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { goToLastPage, goToDetailsPage } from "../routes/coordinator";
import Header from "../components/Header/Header";
import styled from "styled-components";
import GlobalStateContext from "../global/GlobalStateContext";
import PokeCard from "../components/PokeCard/PokeCard";

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

const PokedexPage = () => {
  const history = useHistory();
  const { states } = useContext(GlobalStateContext);

  return (
    <>
      <Header
        title="POKEDEX"
        name="Voltar para lista de pokemons"
        page={() => goToLastPage(history)}
      />
      <div>
        {states.pokedex &&
          states.pokedex.map((item) => {
            return <PokeCard inPokedex key={item.name} poke={item} />;
          })}
      </div>
    </>
  );
};

export default PokedexPage;
