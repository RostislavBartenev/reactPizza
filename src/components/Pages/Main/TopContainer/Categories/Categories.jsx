import React, {useState} from "react";

import './Categories.scss'


const Categories = ({items}) => {

  const [activeItem, setActiveItem] = useState(null)

  const onSelectItem = (index) => {
    setActiveItem(index)
  }

  return (
    <div className="categories">
      <ul>
        <li onClick={() => setActiveItem(null)}
            className={activeItem === null ? 'active' : ''}>
          Все
        </li>
        { items &&
            items.map((name, index) => (
              <li
                onClick={() => onSelectItem(index)}
                key={`${name}_${index}`}
                className={activeItem === index ? 'active' : ''}>
                {name}
              </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Categories