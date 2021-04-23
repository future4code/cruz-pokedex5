import React, { useState, useEffect } from "react";
import GlobaStateContext from "./GlobalStateContext";
import axios from "axios";
import { baseUrl } from "../constants/baseUrl";

const GlobalState = (props) => {
  const [pokeNames, setPokeNames] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  const getPokeNames = () => {
    axios
      .get(`${baseUrl}`)
      .then((res) => {
        setPokeNames(res.data.results);
      })
      .catch((err) => {
        alert("Ops, algo deu errado!");
        console.log(err.message);
      });
  };

  useEffect(() => {
    getPokeNames();
  }, []);

  useEffect(() => {
    const newList = [];
    pokeNames.forEach((item) => {
      axios
        .get(`${baseUrl}/${item.name}`)
        .then((res) => {
          newList.push(res.data);
          if (newList.length === 20) {
            const orderedList = newList.sort((a, b) => {
              return a.id - b.id;
            });
            setPokemons(orderedList);
          }
        })
        .catch((err) => {
          alert("Ops, algo deu errado!");
        });
    });
  }, [pokeNames]);

  const states = { pokemons, pokedex };
  const setters = { setPokemons, setPokedex };
  const requests = { getPokeNames };

  return (
    <GlobaStateContext.Provider value={{ states, setters, requests }}>
      {props.children}
    </GlobaStateContext.Provider>
  );
};

export default GlobalState;
