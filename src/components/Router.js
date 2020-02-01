import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Frog from "./Frog";
import Ladybug from "./Ladybug";
import Bee from "./Bee";
import Bat from "./Bat";
import Butterfly from "./Butterfly";
import Starter from "./Starter";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/AnimalReactApp" component={Starter} />
      <Route exact path="/App" component={App} />
      <Route path="/animal/Frog" component={Frog} />
      <Route path="/animal/Ladybug" component={Ladybug} />
      <Route path="/animal/Bee" component={Bee} />
      <Route path="/animal/Bat" component={Bat}  />
      <Route path="/animal/Butterfly" component={Butterfly} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
