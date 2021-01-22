import { useState, useCallback } from "react";

import { ProductsContext } from "bus/Dashboard/context/productsContext";

export const ProductsState = ({ children }) => {
  const [productsData, setProductsData] = useState([]);

  const getProducts = useCallback(async () => {
    try {
      const responce = await fetch(
        "https://yalantis-react-school-api.yalantis.com/api/v1/products"
      );

      if (responce.status !== 200) {
        throw new Error(responce.status);
      }

      const data = await responce.json();

      setProductsData(data.items);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        getProducts,
        productsData,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
