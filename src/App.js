import { AppProvider } from "@shopify/polaris";
import { Provider } from "react-redux";

import "./App.css";
import Game from "./Components/Game";
import store from "./Components/Redux/store";

function App() {
  return (
    <>
      <AppProvider>
        <Provider store={store}>
          <Game />
        </Provider>
      </AppProvider>
    </>
  );
}

export default App;
