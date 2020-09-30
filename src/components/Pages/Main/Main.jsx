import React from "react";
import TopContainer from "./TopContainer/TopContainer";
import PizzaBlock from "./PizzaBlock/PizzaBlock";

const Main = ({items}) => {

  console.log(items)
  return (
    <div className="container">
      <TopContainer />
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map(obj => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default Main