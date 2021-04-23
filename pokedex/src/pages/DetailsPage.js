import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header/Header";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { goToLastPage } from "../routes/coordinator";
import { useParams } from "react-router-dom";
import GlobalStateContext from "../global/GlobalStateContext";
import { baseUrl } from "../constants/baseUrl";
import axios from "axios";
import { Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const Listas = styled.li`
  list-style: none;
`;

const Titulos = styled.p`
  margin-left: 66px;
  color: #ffffff;
  text-shadow: 2px 2px 2.5px gray;
`;

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
        <Flex
          w="350px"
          margin="0 auto"
          ml="23px"
          color="#ffffff"
          textShadow="2px 2px 2.5px gray"
        >
          <ul key={stat.stat.name}>
            <Listas>
              > {stat.stat.name}: {stat.base_stat}
            </Listas>
          </ul>
        </Flex>
      );
    });

  const typeComponents =
    chosenPokemon &&
    chosenPokemon.sprites &&
    chosenPokemon.types.map((type) => {
      return (
        <Flex
          w="150px"
          margin="0 auto"
          color="#ffffff"
          textShadow="2px 2px 2.5px gray"
        >
          <ul key={type.type.name}>
            <Listas> > {type.type.name}</Listas>
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
          <Flex
            w="250px"
            margin="0 auto"
            color="#ffffff"
            textShadow="2px 2px 2.5px gray"
          >
            <ul key={move.move.name}>
              <Listas> > {move.move.name}</Listas>
            </ul>
          </Flex>
        )
      );
    });

  return (
    <>
      <Header title={name} name="Voltar" page={() => goToLastPage(history)} />
      {/* <Flex
        flexDirection="column"
        w="80vw"
        h="80vh"
        margin="0 auto"
        justifyContent="center"
        alignItems="center"
      > */}
      {chosenPokemon && chosenPokemon.sprites && (
        <div>
          <Flex
            w="80vw"
            margin="0 auto"
            mt="20px"
            mb="20px"
            flexWrap="wrap"
            justifyContent="space-between"
          >
            <Flex
              flexDirection="column"
              alignContent="center"
              justifyContent="center"
            >
              <Flex w="150px">
                <Image
                  w="150px"
                  display="block"
                  margin="0 auto"
                  filter="drop-shadow(0px 4px 9px gray)"
                  src={chosenPokemon.sprites.front_default}
                />
              </Flex>
              <Flex w="150px">
                <Image
                  w="150px"
                  display="block"
                  margin="0 auto"
                  filter="drop-shadow(0px 4px 9px gray)"
                  src={chosenPokemon.sprites.back_default}
                />
              </Flex>
            </Flex>

            <Flex flexDirection="column" w="350px">
              <Titulos>_Status_</Titulos>
              {statusComponents}
            </Flex>

            <Flex flexDirection="column" w="300px">
              <Titulos>_Ataques_</Titulos>
              {atackComponents}
            </Flex>

            <Flex flexDirection="column" w="200px">
              <Titulos>_Tipo_</Titulos>
              {typeComponents}
            </Flex>
          </Flex>
        </div>
      )}
      {/* </Flex> */}
    </>
  );
};

export default DetailsPage;
