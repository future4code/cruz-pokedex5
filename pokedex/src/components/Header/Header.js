import React from "react";
import styled from "styled-components";
import { Flex } from "@chakra-ui/react";

const Button = styled.button`
  margin-left: 6.5%;
  padding: 10px;
  border: none;
  border-radius: 6px;
  background-color: #596d82;
  color: #ffffff;
  cursor: pointer;
  font-size: 0.9em;
  font-family: joystix;
  :hover {
    background-color: #85a1ca;
  }
`;

const Title = styled.h1`
  color: #d29a95;
  font-size: 25px;
  margin: 0 auto;
`;

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
      </Flex>
    </div>
  );
};

export default Header;
