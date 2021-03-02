import React from 'react';
import './App.css';
// import Home from './components/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./containers/home/home";
import List from "./containers/list/list"
// const routes = [
//   {
//     path: "/home",
//     component: Home
//   },
//   {
//     path: "/list",
//     component: List,
//     // routes: [
//     //   {
//     //     path: "/tacos/bus",
//     //     component: Bus
//     //   },
//     //   {
//     //     path: "/tacos/cart",
//     //     component: Cart
//     //   }
//     // ]
//   }
// ];
function App() {
  return (
    <Router>
      <div>
        {/* <ul>
          <li>
            <Link to="/home">home</Link>
          </li>
          <li>
            <Link to="/list">list</Link>
          </li>
        </ul> */}

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/list" component={List}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
