import { Switch, Route, Redirect } from "react-router-dom";

import { book } from "navigation/book";
import Dashboard from "containers/Dashboard";

const Private = () => (
  <Switch>
    <Route component={Dashboard} path={book.dashboard} />

    <Redirect to={book.dashboard} />
  </Switch>
);

export default Private;
