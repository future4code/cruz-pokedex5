import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { Flex, Spacer } from "@chakra-ui/react";

const PokemonDetails = (props) => {
  return (
    <div>
      <Header title="NOME DO POKEMON" name="Voltar" />
      <button>Adicionar/Remover da pokedex</button>
    </div>
  );
};

export default PokemonDetails;
