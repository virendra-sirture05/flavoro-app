import React from "react";
import Homee from "./pages/Homee";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Success from "./pages/Success";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homee/>} />
        <Route path="/success" element={<ProtectedRoute element={<Success/>}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

/*const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Homee />,
  },
  {
    path: "/success",
    element: <ProtectedRoute element={<Success/>}/>
  },
]);*/
