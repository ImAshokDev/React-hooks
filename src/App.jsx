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
import useEffectFetch1 from "./app/Component/useEffectFetch1";
import useEffectFetch2 from "./app/Component/useEffectFetch2";
import useEffectFetch3 from "./app/Component/useEffectFetch3";
import HookContext1 from "./app/Component/HookContext1";
import HookContext2 from "./app/Component/HookContext2";
import ReducerHook1 from "./app/useReducers/ReducerHook1";
import ReducerHook2 from "./app/useReducers/ReducerHook2";
import ReducerHook3 from "./app/useReducers/ReducerHook3";
import ReducerContext from "./app/useReducers/ReducerContext";
import ReducerFetch1 from "./app/useReducers/ReducerFetch1";

export const UserContext = React.createContext();
export const AgeContext = React.createContext();

// const App = () => {
//   return (
//     <div>
//       <UserContext.Provider value={"ashok"}>
//         <AgeContext.Provider value={23}>
//           <BrowserRouter>
//             <Switch>
//               <Route exact path="/" component={ArrayMap} />
//               <Route exact path="/class-counter" component={ClassCounter} />
//               <Route
//                 exact
//                 path="/class-counter-two"
//                 component={ClassCounterTwo}
//               />
//               <Route exact path="/hook-counter" component={HookCounter} />
//               <Route
//                 exact
//                 path="/hook-counter-two"
//                 component={HookCounterTwo}
//               />
//               <Route exact path="/hook-three" component={HookThree} />
//               <Route exact path="/hook-four" component={HookFour} />
//               <Route exact path="/useEffect-one" component={useEffectOne} />
//               <Route
//                 exact
//                 path="/useEffect-fetch1"
//                 component={useEffectFetch1}
//               />
//               <Route
//                 exact
//                 path="/useEffect-fetch2"
//                 component={useEffectFetch2}
//               />
//               <Route
//                 exact
//                 path="/useEffect-fetch3"
//                 component={useEffectFetch3}
//               />
//               <Route exact path="/hook-context1" component={HookContext1} />
//               <Route exact path="/hook-context2" component={HookContext2} />
//             </Switch>
//           </BrowserRouter>
//         </AgeContext.Provider>
//       </UserContext.Provider>
//     </div>
//   );
// };

const App = () => {
  return (
    <div>
      {/* <ReducerHook1 /> */}
      {/* <ReducerHook2 /> */}
      {/* <ReducerHook3 /> */}

      {/* <ReducerContext /> */}
      <ReducerFetch1 />
    </div>
  );
};

export default App;
