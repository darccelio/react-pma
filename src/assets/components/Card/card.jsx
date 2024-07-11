import styles from './card.module.css'
import { useNavigate } from 'react-router-dom'

function Card({
  props,
  children,
  editMode,
  editPath,
  handleSave,
  handleRemove,
}) {
  const navigate = useNavigate()

  const handleDelete = () => {
    handleRemove(props.id)
  }

  const handleBtnSave = () => {
    const user = {
      id: props.id,
      firstName: children.firstName,
      lastName: children.lastName,
      password: children.password,
      createdAt: children.createdAt,
      updatedAt: children.updatedAt,
    }
    handleSave()
  }

  return (
    <div id={styles.cardContainer}>
      <h3>{`${props.firstName} ${props.lastName}`} </h3>
      <div id={styles.contentContainer}>
        <section className={styles.content}>{children}</section>

        <section className={styles.actionContainer}>
          <button
            type="button"
            onClick={() => {
              navigate(editPath)
            }}
          >
            {editMode ? 'Salvar' : 'Editar'}
          </button>
          <button
            type="button"
            role="remover"
            onClick={handleDelete}
            className={styles.removeButton}
          >
            Remover
          </button>
        </section>
      </div>
    </div>
  )
}

export default Card
