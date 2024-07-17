// src/main.jsx
import ReactDOM from "react-dom/client";
import "./index.css";
// import { RouterProvider } from "react-router-dom";
// import { router } from "./Router/index.jsx";
import { Provider } from "react-redux";
import store from "../src/Services/stores/store";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId="303036556064-nvp9b5mk124reoqgta6ncmg7j5p7915s.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </Provider>
);
