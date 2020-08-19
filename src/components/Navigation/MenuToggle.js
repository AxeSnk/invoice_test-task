import React from 'react';
import classes from './MenuToggle.module.scss';


const MenuToggle = props => {
  const cls = [
    classes.MenuToggle
  ]

  if (props.isOpen) {
    cls.push(classes.cross)
    cls.push(classes.open)
  } else {
    cls.push(classes.burger)
  }

  return (
    <i 
      className={cls.join(' ')}
      onClick={props.onToggle}
    />
  )
}

export default MenuToggle 
