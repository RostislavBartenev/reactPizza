import React from 'react';
import { Route } from "react-router-dom";

import './scss/App.scss';

import Header from "./components/Header/Header";
import Main from './components/Pages/Main/Main';
import Cart from "./components/Pages/Cart/Cart";

const App = () => {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/"  component={Main}/>
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
