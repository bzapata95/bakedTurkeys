import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/Main";
import Registrar from "./pages/Register";
import Editar from "./pages/Editar";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/registrar" component={Registrar} />
        <Route
          exact
          path="/editar/:ID"
          render={props => {
            const id = props.match.params.ID;
            return <Editar id={id} />;
          }}
        />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
