import { useRef } from "react";
import { createContext } from "react";
import { useState, useEffect } from "react";
import Bottom from "./components/Bottom";
import Button from "./components/Button";
import Form from "./components/Form";
import Header from "./components/header/Header";
import Middel from "./components/Middel";
import Products from "./components/products/Products";
import Top from "./components/Top";

export const userContext = createContext();
const App = () => {
  const user = {
    name: "naoras",
    age: 37,
    loc: "darra",
  };
  return (
    <>
      <userContext.Provider value={user}>
        <Top />
        <Bottom />
      </userContext.Provider>
    </>
  );
};

export default App;
