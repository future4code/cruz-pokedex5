import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import GlobalStateContext from "../../global/GlobalStateContext";
import Header from "../../components/Header/Header";
import { useHistory } from "react-router-dom";
import { baseUrl } from "../../constants/baseUrl";
import { useParams } from "react-router-dom";
import { goToLastPage } from "../../routes/coordinator";
import { Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Titles, Lists } from "./detailspage-style";

const DetailsPage = () => {
  const history = useHistory();
  const { name, details } = useParams();
  const { states } = useContext(GlobalStateContext);
  const [chosenPokemon, setChosenPokemon] = useState({});

  useEffect(() => {
    let current = [];
    if (details) {
      current = states.pokedex.find((item) => {
        return item.name === name;
      });
    } else {
      current = states.pokemons.find((item) => {
        return item.name === name;
      });
    }
    if (!current) {
      axios
        .get(`${baseUrl}/${name}`)
        .then((res) => setChosenPokemon(res.data))
        .catch((err) => {
          alert("Ops! Algo deu errado.");
          console.log(err);
        });
    } else {
      setChosenPokemon(current);
    }
  }, []);
  const statusComponents =
    chosenPokemon &&
    chosenPokemon.sprites &&
    chosenPokemon.stats.map((stat) => {
      return (
        <Flex color="#ffffff" textShadow="2px 2px 2.5px gray">
          <ul key={stat.stat.name}>
            <Lists>
              > {stat.stat.name}: {stat.base_stat}
            </Lists>
          </ul>
        </Flex>
      );
    });

  const typeComponents =
    chosenPokemon &&
    chosenPokemon.sprites &&
    chosenPokemon.types.map((type) => {
      return (
        <Flex color="#ffffff" textShadow="2px 2px 2.5px gray">
          <ul key={type.type.name}>
            <Lists> > {type.type.name}</Lists>
          </ul>
        </Flex>
      );
    });

  const atackComponents =
    chosenPokemon &&
    chosenPokemon.sprites &&
    chosenPokemon.moves.map((move, index) => {
      return (
        index < 5 && (
          <Flex color="#ffffff" textShadow="2px 2px 2.5px gray">
            <ul key={move.move.name}>
              <Lists> > {move.move.name}</Lists>
            </ul>
          </Flex>
        )
      );
    });

  return (
    <>
      <Header title={name} name="Voltar" page={() => goToLastPage(history)} />

      {chosenPokemon && chosenPokemon.sprites && (
        <>
          <Flex
            w="90vw"
            margin="0 auto"
            mt="20px"
            mb="20px"
            flexWrap="wrap"
            justifyContent="center"
          >
            <Flex
              flexDirection="column"
              alignContent="center"
              justifyContent="center"
            >
              <Image
                w="150px"
                filter="drop-shadow(0px 4px 9px gray)"
                src={chosenPokemon.sprites.front_default}
              />

              <Image
                w="150px"
                filter="drop-shadow(0px 4px 9px gray)"
                src={chosenPokemon.sprites.back_default}
              />
            </Flex>
            <Flex flexDirection="column" w="320px">
              <Titles>_Status_</Titles>
              {statusComponents}
            </Flex>

            <Flex flexDirection="column" w="320px">
              <Titles>_Ataques_</Titles>
              {atackComponents}
            </Flex>

            <Flex flexDirection="column" w="320px">
              <Titles>_Tipo_</Titles>
              {typeComponents}
            </Flex>
          </Flex>
        </>
      )}
    </>
  );
};

export default DetailsPage;
