import React from 'react'
import { styles } from './cards.module.css'

const Cards = props => {
  return (
    <div className={styles.container}>
      <h3>{props.title}</h3>
      <div className={styles.content-container}>
        <section>
          <p>{props.content}</p>
        </section>
        <section> className={styles.actions}
          <button type="button">{props.action1}</button>
          <button type="button">{props.action2}</button>
        </section>
      </div>
    </div>
  )
}

export default Cards
