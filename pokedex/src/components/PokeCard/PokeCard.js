import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../../global/GlobalStateContext";
import { goToDetailsPage } from "../../routes/coordinator";

const PokeCard = (props) => {
  const history = useHistory();
  const { pokemons, setPokemons, pokedex, setPokedex } = useContext(
    GlobalStateContext
  );

  const addPokedex = () => {
    const onePoke = pokemons.findIndex((item) => item.name === props.poke.name);
    const newPokeList = [...pokemons];
    newPokeList.splice(onePoke, 1);
    const orderedPokemons = newPokeList.sort((a, b) => {
      return a.id - b.id;
    });

    const newPokedexList = [...pokedex, props.poke];
    const orderedPokedex = newPokedexList.sort((a, b) => {
      return a.id - b.id;
    });

    setPokedex(orderedPokedex);
    setPokemons(orderedPokemons);
  };

  const removePokedex = () => {
    const pokeIndex = pokedex.findIndex(
      (item) => item.name === props.poke.name
    );
    const updatedPokedexList = [...pokedex];
    updatedPokedexList.splice(pokeIndex, 1);

    const orderedPokedex = updatedPokedexList.sort((a, b) => {
      return a.id - b.id;
    });

    const newPokemonList = [...pokemons, props.poke];
    const orderedPokemons = newPokemonList.sort((a, b) => {
      return a.id - b.id;
    });

    setPokedex(orderedPokedex);
    setPokemons(orderedPokemons);
  };

  return (
    <div>
      <img
        src={props.poke && props.poke.sprites.front_default}
        alt={props.poke.name}
      />
      <div>
        <button onClick={props.inPokedex ? removePokedex : addPokedex}>
          {props.inPokedex ? "Remove from Pokédex" : "Add to Pokédex"}
        </button>
        <button
          onClick={() =>
            goToDetailsPage(history, props.poke.name, props.inPokedex)
          }
        >
          Detalhes
        </button>
      </div>
    </div>
  );
};

export default PokeCard;
