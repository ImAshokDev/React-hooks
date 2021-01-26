import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ArrayMap from "./app/MapFunc";
import ClassCounter from "./app/Component/ClassCounter";
import HookCounter from "./app/Component/HookCounter";
import HookCounterTwo from "./app/Component/HookCounterTwo";

const App = () => {
  return (
    <div>
      {/* <SideBar /> */}

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ArrayMap} />
          <Route exact path="/class-counter" component={ClassCounter} />
          <Route exact path="/hook-counter" component={HookCounter} />
          <Route exact path="/hook-counter-two" component={HookCounterTwo} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
