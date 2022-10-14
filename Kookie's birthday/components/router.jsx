import * as React from "react";
import { Switch, Route, Router } from "wouter";
import Home from "./src/pages/home";
import About from "./src/pages/about";



export default () => (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
);
