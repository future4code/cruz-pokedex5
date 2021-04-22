import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { goToPokedexPage } from "../routes/coordinator";
import Header from "../components/Header/Header";
import GlobalStateContext from "../global/GlobalStateContext";
import PokeCard from "../components/PokeCard/PokeCard";
import { Grid, GridItem } from "@chakra-ui/react";

const HomePage = (props) => {
  const history = useHistory();
  const { states } = useContext(GlobalStateContext);

  const pokemonsComponents =
    states.pokemons &&
    states.pokemons.map((poke) => {
      return (
        <Grid>
          <GridItem margin="0 auto">
            <PokeCard key={poke.name} poke={poke} name={poke.name} />
          </GridItem>
        </Grid>
      );
    });

  return (
    <>
      <Header
        title="POKÉMONS"
        name="Pokedex"
        page={() => goToPokedexPage(history)}
      />
      <Grid
        templateColumns="repeat(6, 1fr)"
        gap="10px"
        w="88vw"
        margin="0 auto"
        mt="20px"
        mb="20px"
      >
        {pokemonsComponents}
      </Grid>
    </>
  );
};

export default HomePage;
