import React, { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import { useHistory } from "react-router-dom";
import { goToDetailsPage } from "../../routes/coordinator";
import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faMinusCircle,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { PokeName, AddAndRemoveButton, DetailsButton } from "./pokecard-style";

const PokeCard = (props) => {
  const history = useHistory();
  const { states, setters } = useContext(GlobalStateContext);
  const { poke, name, inPokedex } = props;

  const addPokedex = () => {
    const onePoke = states.pokemons.findIndex(
      (item) => item.name === poke.name
    );
    const newPokeList = [...states.pokemons];
    newPokeList.splice(onePoke, 1);
    const orderedPokemons = newPokeList.sort((a, b) => {
      return a.id - b.id;
    });

    const newPokedexList = [...states.pokedex, poke];
    const orderedPokedex = newPokedexList.sort((a, b) => {
      return a.id - b.id;
    });

    setters.setPokedex(orderedPokedex);
    setters.setPokemons(orderedPokemons);
  };

  const removePokedex = () => {
    const pokeIndex = states.pokedex.findIndex(
      (item) => item.name === poke.name
    );
    const updatedPokedexList = [...states.pokedex];
    updatedPokedexList.splice(pokeIndex, 1);

    const orderedPokedex = updatedPokedexList.sort((a, b) => {
      return a.id - b.id;
    });

    const newPokemonList = [...states.pokemons, poke];
    const orderedPokemons = newPokemonList.sort((a, b) => {
      return a.id - b.id;
    });

    setters.setPokedex(orderedPokedex);
    setters.setPokemons(orderedPokemons);
  };

  return (
    <div>
      <Box
        borderRadius="15px"
        border="1px solid white"
        mb="12px"
        minW="11vw"
        m="5px"
        p={4}
      >
        <PokeName>{name}</PokeName>
        <Image
          h="100px"
          display="block"
          margin="0 auto"
          filter="drop-shadow(0px 4px 9px gray)"
          src={poke && poke.sprites.front_default}
          alt={poke.name}
        />
        <Flex justifyContent="space-between" mb="6px">
          <AddAndRemoveButton onClick={inPokedex ? removePokedex : addPokedex}>
            {inPokedex ? (
              <FontAwesomeIcon color="#c40233" size="2x" icon={faMinusCircle} />
            ) : (
              <FontAwesomeIcon size="2x" icon={faPlusCircle} />
            )}
          </AddAndRemoveButton>
          <DetailsButton
            onClick={() => goToDetailsPage(history, poke.name, inPokedex)}
          >
            <FontAwesomeIcon size="2x" icon={faEye} />
          </DetailsButton>
        </Flex>
      </Box>
    </div>
  );
};

export default PokeCard;
