import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { CurrentUserProvider } from "./contexts/UserContexts";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const helmetContext = {};

root.render(
  <React.StrictMode>
    <HelmetProvider context={helmetContext}>
      <CurrentUserProvider>
        <App />
      </CurrentUserProvider>
    </HelmetProvider>
  </React.StrictMode>
);
