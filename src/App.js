import Home from "./components/Home";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const App = ({ props }) => (
  <BrowserRouter>
    <Route path="/" component={Home} />
  </BrowserRouter>
);

export default App;
