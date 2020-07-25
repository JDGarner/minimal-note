import React from "react";
import ReactDOM from "react-dom";
import App from "./src/App";
import { UserProvider } from "./src/providers/UserProvider";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
