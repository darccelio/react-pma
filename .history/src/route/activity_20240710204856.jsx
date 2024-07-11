
import { useEffect, useState } from 'react'
import GetActivities from '../services/activity-service'

function Activity() {
  const [activityList, setActivityList] = useState([])

  useEffect(() => {
    GetActivities()
      .then(data => {
        const activities = data.activities || []
        setActivityList(activities)
      })
      .catch(err => {
        console.error(`Erro: ${err}`)
        setActivityList([])
      })
  }, [])

  const formataData = ( data ) => {
    const date = new Date(data)
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
  }

  return (
    <>
      {activityList.some ? (
        activityList.map(activity => (
          <div key={activity.id}>
            <h1>Id: {activity.id}</h1>
            <p>Descrição: {activity.description}</p>
            <p>Usuário id: {activity.userId}</p>
            <p>Categoria id: {activity.categoryId}</p>
            <p>Criado em: {activity.createdAt}</p>
            <p>Alterado em: {formataData(activity.updatedAt)}</p>
          </div>
        ))
      ) : (
        <div>
          <p>Lista de Atividades está vazia</p>
        </div>
      )}
    </>
  )
}

export default Activity
