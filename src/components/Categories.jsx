import React, { useState } from 'react'





function Categories({ items }) {

    const [activeItem, setActiveItem] = useState(null);

    const onSelectItem = (index) => {
        setActiveItem(index)
    }

    return (


        <div className='categories'>
            <ul>
                <li className={activeItem === null ? 'active' : ''}
                    onClick={() => onSelectItem(null)}  >все</li>
                {
                    items &&
                    items.map((name, i) => (
                        <li
                            className={activeItem === i ? 'active' : ''}
                            onClick={() => onSelectItem(i)} key={name + i}>
                            {name}
                        </li>
                    ))}
            </ul>

        </div>
    )
}

export default Categories



