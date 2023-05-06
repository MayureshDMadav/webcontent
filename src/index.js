import React from "react";
import ReactDOM from "react-dom/client";
import RoutePage from "./pages/RoutePage";
import SingupPage from "./pages/singupPage";
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 
 
  <BrowserRouter>
  <RoutePage/>
  </BrowserRouter>


);
