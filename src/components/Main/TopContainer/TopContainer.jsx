import React from "react";

import Categories from "./Categories/Categories";
import Sort from "./Sort/Sort";

const TopContainer = () => {

  return (
    <div className="content__top">
      <Categories items={[
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые',
      ]}/>
      <Sort />
    </div>
  )
}

export default TopContainer