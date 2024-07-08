// src/main.jsx
import ReactDOM from "react-dom/client";
import "./index.css";
// import { RouterProvider } from "react-router-dom";
// import { router } from "./Router/index.jsx";
import { Provider } from "react-redux";
import store from "../src/Services/stores/store";import App from "./App";


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
