import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { goToPokedexPage } from "../routes/coordinator";
import Header from "../components/Header/Header";
import GlobalStateContext from "../global/GlobalStateContext";
import PokeCard from "../components/PokeCard/PokeCard";
import { Grid, GridItem } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { Flex, Spacer } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
});

const HomePage = (props) => {
  const history = useHistory();
  const { states } = useContext(GlobalStateContext);

  const pokemonsComponents =
    states.pokemons &&
    states.pokemons.map((item) => {
      return (
        <Box>
          <PokeCard key={item.name} poke={item} name={item.name} />
        </Box>
      );
    });

  return (
    <>
      <Header
        title="POKÉMONS"
        name="Pokedex"
        page={() => goToPokedexPage(history)}
      />
      <Flex
        w="88vw"
        margin="0 auto"
        mt="20px"
        mb="20px"
        flexWrap="wrap"
        justifyContent="space-between"
      >
        {pokemonsComponents}
      </Flex>
    </>
  );
};

export default HomePage;
