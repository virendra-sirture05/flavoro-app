import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";;
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import store from './redux/store.js';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </StrictMode>
);
