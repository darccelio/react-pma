import React from 'react'
import { styles } from './cards.module.css'
import {useNavigate} from 'react-router-dom'

const Cards = ({props, children}) => {



  return (
    <div className={styles.container}>
      <h3>{props.title}</h3>
      <div className={styles.contentContainer}>
        <section className={styles.content}>
          {children}
        </section>
        <section> className={styles.actions}
          <button type="button">Editar</button> 
          <button type="button">Remover</button> 
        </section>
      </div>
    </div>
  )
}

export default Cards
