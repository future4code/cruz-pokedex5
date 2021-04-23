import React, { useContext } from "react";
import GlobalStateContext from "../global/GlobalStateContext";
import Header from "../components/Header/Header";
import PokeCard from "../components/PokeCard/PokeCard";
import { useHistory } from "react-router-dom";
import { goToLastPage } from "../routes/coordinator";
import { Flex } from "@chakra-ui/react";

const PokedexPage = () => {
  const history = useHistory();
  const { states } = useContext(GlobalStateContext);

  const pokemonsComponents =
    states.pokedex &&
    states.pokedex.map((item) => {
      return (
        <PokeCard inPokedex key={item.name} poke={item} name={item.name} />
      );
    });

  return (
    <>
      <Header
        title="Pokedex"
        name="Voltar"
        page={() => goToLastPage(history)}
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

export default PokedexPage;
