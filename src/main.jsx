import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Success from "./pages/Success.jsx";
import Homee from "./pages/Homee.jsx";
import { Provider } from "react-redux";
// import store from "./redux/store.js";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import store from './redux/store';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </StrictMode>
);
