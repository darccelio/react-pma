import React from 'react'
import { styles } from './cards.module.css'

const Cards = (props) => {
  return (
    <div className>
        <h3>{props.title}</h3>
        <div>
        <p>{props.content}</p>
        </div>
        <div>
          <button type="button">{props.action1}</button>
          <button type="button">{props.action2}</button>
        </div>
    </div>
  )
}

export default Cards