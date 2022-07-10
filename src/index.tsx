import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App/App";
import reportWebVitals from "./reportWebVitals";
import Web3Provider from "./Web3/Web3Provider";

import { defaultTheme } from "./common/theme/Theme";
import { StoreContext } from "./hooks/useStores";
import { ThemeContext } from "./hooks/useTheme";
import RootStore from "./stores/RootStore";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Web3Provider>
      <StoreContext.Provider value={new RootStore()}>
        <ThemeContext.Provider value={defaultTheme}>
          <App />
        </ThemeContext.Provider>
      </StoreContext.Provider>
    </Web3Provider>
  </React.StrictMode>
);

reportWebVitals();
