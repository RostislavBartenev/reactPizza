import React, {useEffect, useState} from 'react';
import { Route } from "react-router-dom";

import './scss/App.scss';

import Header from "./components/Header/Header";
import Main from './components/Pages/Main/Main';
import Cart from "./components/Pages/Cart/Cart";


const App = () => {

  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then(resp => resp.json())
      .then(json => setPizzas(json.pizzas))
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" render={() => <Main items={pizzas} />}/>
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
