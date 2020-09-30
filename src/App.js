import React from 'react';
import './scss/App.scss';


import Header from "./components/Header/Header";
import TopContainer from "./components/Main/TopContainer/TopContainer";
import ContainerItems from "./components/Main/ContainerItems/ContainerItems";

const App = () => {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <TopContainer />
          <h2 className="content__title">Все пиццы</h2>
          <ContainerItems />
        </div>
      </div>
    </div>
  );
}

export default App;
