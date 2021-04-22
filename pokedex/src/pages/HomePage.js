import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { goToPokedexPage } from "../routes/coordinator";
import Header from "../components/Header/Header";
import GlobalStateContext from "../global/GlobalStateContext";
import PokeCard from "../components/PokeCard/PokeCard";

const HomePage = (props) => {
  const history = useHistory();
  const { pokemons } = useContext(GlobalStateContext);

  return (
    <>
      <Header
        title="LISTA DE POKEMONS (VINDO DA API)"
        name="Ver minha POKEDEX"
        page={() => goToPokedexPage(history)}
      />
      <div>
        {pokemons &&
          pokemons.map((poke) => {
            return <PokeCard key={poke.name} poke={poke} />;
          })}
      </div>
    </>
  );
};

export default HomePage;
