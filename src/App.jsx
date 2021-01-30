import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ArrayMap from "./app/MapFunc";
import ClassCounter from "./app/Component/ClassCounter";
import ClassCounterTwo from "./app/Component/ClassCounterTwo";
import HookCounter from "./app/Component/HookCounter";
import HookCounterTwo from "./app/Component/HookCounterTwo";
import HookThree from "./app/Component/HookThree";
import HookFour from "./app/Component/HookFour";
import useEffectOne from "./app/Component/useEffectOne";

const App = () => {
  return (
    <div>
      {/* <SideBar /> */}

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ArrayMap} />
          <Route exact path="/class-counter" component={ClassCounter} />
          <Route exact path="/class-counter-two" component={ClassCounterTwo} />
          <Route exact path="/hook-counter" component={HookCounter} />
          <Route exact path="/hook-counter-two" component={HookCounterTwo} />
          <Route exact path="/hook-three" component={HookThree} />
          <Route exact path="/hook-four" component={HookFour} />
          <Route exact path="/useEffect-one" component={useEffectOne} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
