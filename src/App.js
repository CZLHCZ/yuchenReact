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
import List from "./components/list/list"
const routes = [
  {
    path: "/home",
    component: Sandwiches
  },
  {
    path: "/tacos",
    component: Tacos,
    routes: [
      {
        path: "/tacos/bus",
        component: Bus
      },
      {
        path: "/tacos/cart",
        component: Cart
      }
    ]
  }
];
function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
