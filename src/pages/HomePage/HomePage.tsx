import React, { useContext } from "react";
import {
  ProductsContextType,
  productContext,
} from "../../Contexts/ProductsContext";

function HomePage() {
  const {
    counter,
    increment,
    decrement,
    color,
    changeColor,
    fontSize,
    changeFontSize,
  } = useContext(productContext) as ProductsContextType;

  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={changeColor}>Change color</button>
      {/*color:color*/}
      <input
        placeholder="font-size"
        type="input"
        onChange={(e) => changeFontSize(e.target.value)}
      />
      <h1 style={{ color, fontSize: `${fontSize}px` }}>{counter}</h1>
    </div>
  );
}

export default HomePage;
