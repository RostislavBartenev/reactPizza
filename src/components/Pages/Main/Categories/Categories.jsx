import React from "react";

import './Categories.scss'

const Categories = ({activeCategory, items, onClickCategory}) => {


  return (
    <div className="categories">
      <ul>
        <li onClick={() => onClickCategory(null)}
            className={activeCategory === null ? 'active' : ''}>
          Все
        </li>
        { items &&
            items.map((name, index) => (
              <li
                onClick={() => onClickCategory(index)}
                key={`${name}_${index}`}
                className={activeCategory === index ? 'active' : ''}>
                {name}
              </li>
          ))
        }
      </ul>
    </div>
  )
}

export default React.memo(Categories)