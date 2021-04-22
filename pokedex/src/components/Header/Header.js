import React from "react";
import { Grid } from "@chakra-ui/react";
import styled from "styled-components";

const Button = styled.button`
  margin-left: 82px;
  width: ${(props) => props.width || "120px"};
  padding: 10px;
  border: none;
  border-radius: 6px;
  background-color: #596d82;
  color: #ffffff;
  cursor: pointer;
  font-family: joystix;

  :hover {
    background-color: #85a1ca;
  }
`;

const Title = styled.h1`
  color: #d29a95;
  margin: 0 auto;
`;

const Header = (props) => {
  return (
    <div>
      <Grid
        templateColumns="10px 1fr"
        alignItems="center"
        justifyContent="center"
        backgroundColor="#f3d8e0"
        height="70px"
      >
        <Button onClick={props.page}>{props.name}</Button>

        <Title>{props.title}</Title>
      </Grid>
    </div>
  );
};

export default Header;
