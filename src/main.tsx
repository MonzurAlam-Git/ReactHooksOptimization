import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import ThemeProvider from "./Components/Context/ThemeProvider.tsx";
import ExperimentProvider from "./Components/Context/ExperimentProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  //<React.StrictMode>
  <ExperimentProvider>
    <App />
  </ExperimentProvider>
  //</React.StrictMode>
);
