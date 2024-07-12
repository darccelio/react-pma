import styles from './card.module.css'
import { useNavigate, useParams } from 'react-router-dom'

function Card({
  props,
  children,
  editMode,
  editPath,
  handleSave,
  handleRemove,
  title,
}) {
  const navigate = useNavigate()
  const {id}  = useParams()

  const handleDelete = () => {
    handleRemove(props.id)
  }

  const handleBtnAcaoPrincipal = () => {

    console.log(`EditmOde: ${editMode}`);
    if(editMode && id?.length > 0){
      handleSave({'metodo': 'put', 'id': id})
      console.log("chamou o put: ", id);
    }
    else {
      handleSave({'metodo': 'post', 'id': null})
    }
  }

  return (
    <div id={styles.cardContainer}>
      {editMode ? <h3>{title ?? 'Editar'}</h3>: <></>}

      <div id={styles.contentContainer}>
        <section className={styles.content}>{children}</section>

        <section className={styles.actionContainer}>
          {id?.length > 0 &&<button
            type="button"
            role="remover"
            onClick={handleDelete}
            className={styles.removeButton}
          >
            Remover
          </button>}
          <button
            type="button"
            onClick={() => {
              if (editMode) {
                handleBtnAcaoPrincipal()
              }
              navigate(editPath)
            }}
          >
            {editMode ? 'Salvar' : 'Editar'}
          </button>
          {editMode && <button
            type="button"
            onClick={() => {
              navigate(-1)
            }}
          >
            Voltar
          </button>}
        </section>
      </div>
    </div>
  )
}

export default Card
