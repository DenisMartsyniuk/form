import { useSelector } from "react-redux";

import Public from "navigation/Public";
import Private from "navigation/Private";

import { selectToken } from "bus/SignIn/selectors";

const App = () => {
  const token = useSelector(selectToken);

  const isAuthenticated = token?.length;

  return <>{isAuthenticated ? <Private /> : <Public />}</>;
};

export default App;
