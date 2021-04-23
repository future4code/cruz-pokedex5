import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { goToLastPage, goToDetailsPage } from "../routes/coordinator";
import Header from "../components/Header/Header";
import styled from "styled-components";
import GlobalStateContext from "../global/GlobalStateContext";
import PokeCard from "../components/PokeCard/PokeCard";
import { Grid, GridItem } from "@chakra-ui/react";

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

  const pokemonsComponents =
    states.pokedex &&
    states.pokedex.map((item) => {
      return (
        <Grid>
          <GridItem margin="0 auto">
            <PokeCard inPokedex key={item.name} poke={item} name={item.name} />
          </GridItem>
        </Grid>
      );
    });

  return (
    <>
      <Header
        title="Pokedex"
        name="Voltar"
        page={() => goToLastPage(history)}
      />
      <Grid
        templateColumns="repeat(6, 1fr)"
        gap="10px"
        w="89vw"
        margin="0 auto"
        mt="20px"
        mb="20px"
      >
        {pokemonsComponents}
      </Grid>
    </>
  );
};

export default PokedexPage;
