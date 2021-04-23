import React from "react";
import { Flex } from "@chakra-ui/react";
import { Button, Title, Pokebola } from "./header-style";
import pokebola from "../../images/pokebola.png";

const Header = (props) => {
  const { page, name, title } = props;
  return (
    <div>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        backgroundColor="#f3d8e0"
        height="70px"
      >
        <Button onClick={page}>{name}</Button>

        <Title>{title}</Title>
        <Pokebola src={pokebola} alt="Imagem de pokebola" />
      </Flex>
    </div>
  );
};

export default Header;
