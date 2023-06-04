
import React from "react";
import ItemPage from "./components/ItemPage";
import Home from "./components/Home";
import { Route,Routes } from "react-router-dom";

function App() {
  return (
    <>
    <nav><h3>Social Media App</h3></nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/item" element={<ItemPage/>}/>
    </Routes>
    </>
  );
}

export default App;
