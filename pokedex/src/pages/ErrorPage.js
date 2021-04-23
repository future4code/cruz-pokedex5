import React from "react";
import { useHistory } from "react-router-dom";
import { goToHomePage } from "../routes/coordinator";
import styled from "styled-components";
import { Flex } from "@chakra-ui/react";

import pokebola from "../images/pokebola.png";

const ErrorText = styled.p`
  text-shadow: 2px 2px 2.5px gray;
  color: #ffffff;
  margin: 20px;
  text-align: center;
  width: 50%;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 6px;
  background-color: #596d82;
  color: #ffffff;
  cursor: pointer;
  font-size: 0.8em;
  font-family: joystix;
  margin: 0 auto;
  :hover {
    background-color: #85a1ca;
  }
`;

const Pokebola = styled.img`
  width: 50px;
  height: 10%;
  margin: 10px;
`;

const ErrorPage = () => {
  const history = useHistory();

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      mt="20px"
      direction="column"
    >
      <Pokebola src={pokebola} alt="Imagem de pokebola" />
      <ErrorText>
        hEY! Esta página não existe, clique no botão abaixo para ser direcionado
        para a homepage.
      </ErrorText>
      <Button onClick={() => goToHomePage(history)}>HomePage</Button>
    </Flex>
  );
};

export default ErrorPage;
