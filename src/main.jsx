import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createPinia, PiniaVuePlugin } from "pinia";
import { createApp } from "vue";

const pinia = createPinia();

const app = createApp(App);
app.use(pinia);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
