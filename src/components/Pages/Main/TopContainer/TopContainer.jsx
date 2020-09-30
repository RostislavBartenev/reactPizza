import React from "react";

import Categories from "./Categories/Categories";
import Sort from "./Sort/Sort";

const TopContainer = () => {

  return (
    <div className="content__top">
      <Categories items={[
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые',
      ]}/>
      <Sort items={[
        'Популярности',
        'Цене',
        'Алфавиту'
      ]}/>
    </div>
  )
}

export default TopContainer