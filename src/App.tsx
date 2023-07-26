import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import ProductContext from "./Contexts/ProductsContext";

function App() {
  return (
    <BrowserRouter>
      <ProductContext>
        <AppRoutes />
      </ProductContext>
    </BrowserRouter>
  );
}

export default App;
