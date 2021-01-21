import { Switch, Route, Redirect } from "react-router-dom";

import { book } from "navigation/book";
import SignIn from "containers/SignIn";

const Public = () => (
  <Switch>
    <Route component={SignIn} path={book.signIn} />

    <Redirect to={book.signIn} />
  </Switch>
);

export default Public;
