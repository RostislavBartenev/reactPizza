import React, {useState} from "react";

import './Categories.scss'


const Categories = ({items}) => {

  const [activeItem, setActiveItem] = useState(0)

  return (
    <div className="categories">
      <ul>
        {
          items.map((name, index) => (
            <li
              onClick={() => setActiveItem(index)}
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