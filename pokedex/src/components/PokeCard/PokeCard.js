import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../../global/GlobalStateContext";
import { goToDetailsPage } from "../../routes/coordinator";
import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faMinusCircle,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Flex } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
});

const PokeName = styled.p`
  color: #ffffff;
  text-shadow: 2px 2px 2.5px gray;
  font-family: joystix;
  margin: 0 auto;
  margin-top: 13px;
  margin-bottom: 8px;
  text-align: center;
  font-size: small;
`;

const AddAndRemoveButton = styled.button`
  width: 60px;
  background-color: transparent;
  border: none;
  color: #008000;
  cursor: pointer;
  :hover {
    color: #ffffff;
    transform: scale(1.2);
    transition: all 0.3s ease 0s;
  }
`;

const DetailsButton = styled.button`
  width: 60px;
  background-color: transparent;
  border: none;
  color: #4869a2;
  cursor: pointer;
  :hover {
    color: #ffffff;
    transform: scale(1.2);
    transition: all 0.3s ease 0s;
  }
`;

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
