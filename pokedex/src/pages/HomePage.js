import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { goToPokedexPage } from "../routes/coordinator";
import Header from "../components/Header/Header";
import GlobalStateContext from "../global/GlobalStateContext";
import PokeCard from "../components/PokeCard/PokeCard";
import { Flex } from "@chakra-ui/react";

const HomePage = (props) => {
  const history = useHistory();
  const { states } = useContext(GlobalStateContext);

  const pokemonsComponents =
    states.pokemons &&
    states.pokemons.map((item) => {
      return <PokeCard key={item.name} poke={item} name={item.name} />;
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
