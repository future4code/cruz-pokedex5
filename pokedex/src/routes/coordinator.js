export const goToPokedexPage = (history) => {
    history.push("/pokedex");
}

export const goToDetailsPage = (history) => {
    history.push("/pokedex/details");
}

export const goToHomePage = (history) => {
    history.push("/");
  }; 

export const goToLastPage = (history) => {
    history.goBack();
  };