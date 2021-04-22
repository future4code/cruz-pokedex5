import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { goToLastPage, goToPokedexPage } from "../../routes/coordinator";

const Button = styled.button`
  margin-left: 20px;
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
`;

const Title = styled.h1`
  color: #d29a95;
  margin: 0 auto;
`;

const Header = (props) => {
  return (
    <div>
      <Grid
        templateColumns="100px 1fr"
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
