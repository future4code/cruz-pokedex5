import React from "react";
import { useHistory } from "react-router-dom";
import { goToLastPage } from "../routes/coordinator";

const DetailsPage = () => {
    const history = useHistory();
  
    return (
      <>
        <p>Detalhes</p>
        <button onClick={() => goToLastPage(history)}>Voltar</button>
      </>
    );
  };
  
  export default DetailsPage;