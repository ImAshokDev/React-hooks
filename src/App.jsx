import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ArrayMap from "./app/MapFunc";
import ClassCounter from "./app/Component/ClassCounter";

const App = () => {
  return (
    <div>
      {/* <SideBar /> */}

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ArrayMap} />
          <Route exact path="/class-counter" component={ClassCounter} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
