import React from "react";
import ReactDOM from "react-dom";

import Dashboard from "containers/Dashboard";
import { ProductsState } from "bus/Dashboard/context/productsState";

ReactDOM.render(
  <React.StrictMode>
    <ProductsState>
      <Dashboard />
    </ProductsState>
  </React.StrictMode>,
  document.getElementById("root")
);
