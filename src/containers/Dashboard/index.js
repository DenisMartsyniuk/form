import { useContext, useEffect } from "react";

import { ProductsContext } from "bus/Dashboard/context/productsContext";

const Dashboard = () => {
  const { getProducts, productsData } = useContext(ProductsContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div>Dashboard</div>
      <div>
        {productsData.map((item) => (
          <p key={item.id}>{item.name}</p>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
