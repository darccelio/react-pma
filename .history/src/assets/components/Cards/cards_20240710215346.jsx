import React from 'react'
import { styles } from './cards.module.css'
import { useNavigate } from 'react-router-dom'

const Cards = ({ props, children }) => {
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <h3>{props.title}</h3>
      <div className={styles.contentContainer}>
        <section className={styles.content}>{children}</section>
        <section>
          {' '}
          className={styles.actions}
          <button
            type="button"
            onClick={() => {
              navigate(props.path1)
            }}
          >
            Editar
          </button>
          <button
            type="button"
            onClick={() => {
              navigate(props.path2)
            }}
          >
            Remover
          </button>
        </section>
      </div>
    </div>
  )
}

export default Cards
