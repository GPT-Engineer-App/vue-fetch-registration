import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createPinia, PiniaVuePlugin } from 'pinia';

const pinia = createPinia();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PiniaVuePlugin>
      <App />
    </PiniaVuePlugin>
  </React.StrictMode>,
);