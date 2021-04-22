import "./App.css";
import Router from "./routes/Router";
import { ChakraProvider } from "@chakra-ui/react";
import GlobalState from "./global/GlobalState";

function App() {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
}

export default App;
