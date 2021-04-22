import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header/Header";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { goToLastPage } from "../routes/coordinator";
import { useParams } from "react-router-dom";
import GlobalStateContext from "../global/GlobalStateContext";
import { baseUrl } from "../constants/baseUrl";
import axios from "axios";

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

  return (
    <>
      <Header
        title="NOME DO POKEMON"
        name="Voltar"
        page={() => goToLastPage(history)}
      />

      {chosenPokemon && chosenPokemon.sprites && (
        <div>
          <img src={chosenPokemon.sprites.front_default} />
          <img src={chosenPokemon.sprites.back_default} />
          <p>Status</p>
          {chosenPokemon &&
            chosenPokemon.stats.map((stat) => {
              return (
                <p key={stat.stat.name}>
                  {stat.stat.name}: {stat.base_stat}
                </p>
              );
            })}
          <p>Moves</p>
          {chosenPokemon &&
            chosenPokemon.types.map((type) => {
              return <p key={type.type.name}>{type.type.name}</p>;
            })}
          <p>Principais ataques</p>
          {chosenPokemon &&
            chosenPokemon.moves.map((move, index) => {
              return index < 5 && <p key={move.move.name}>{move.move.name}</p>;
            })}
        </div>
      )}
    </>
  );
};

export default DetailsPage;
