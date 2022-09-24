
import React from 'react'
import classNames from 'classnames'







export default function Button({outline, className, children}) {
  return (
    <button className={classNames('button', 
   className,
    {'button--outline':outline})}>
        {children}
        </button>
  )
}




