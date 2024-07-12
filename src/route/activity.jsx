import { useEffect, useState } from 'react'
import { GetActivities, RemoveActivity } from '../services/activity-service'
import FormataData from '../services/uteis-service'
import Card from '../assets/components/Card/card'
import Container from '../assets/components/Container/container'
import Searchbar from '../assets/components/SearchBar/searchbar'

function Activity() {
  const [activityList, setActivityList] = useState([])
  const [error, setError] = useState('')

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

  const handleRemove = async id => {
    console.log(`ACTIVITY: ${id}`)
    try {
      await RemoveActivity(id)
      const updatedUsers = activityList.filter(user => user.id !== id)
      setActivityList(updatedUsers)
      console.log(`Atividade removida com sucesso: ${id}`)
    } catch (er) {
      setError(er)
      console.error(`Erro ao remover atividade ${id}: ${er}`)
    }
  }

  return (
    <>
      <div>
        <h1>Lista de Atividades</h1>
      </div>
      <Container>
    
        {activityList.some ? (
          activityList.map(activity => (
            <div key={activity.id}>
              <Card
                props={activity}
                editPath={`/activity/${activity.id}`}
                handleRemove={() => handleRemove(activity.id)}
              >
                <p>Id: {activity.id}</p>
                <p>Descrição: {activity.description}</p>
                <p>Usuário id: {activity.userId}</p>
                <p>Categoria id: {activity.categoryId}</p>
                <p>Criado em: {FormataData(activity.createdAt)}</p>
                <p>Alterado em: {FormataData(activity.updatedAt)}</p>
              </Card>
            </div>
          ))
        ) : (
          <div>
            <p>Lista de Atividades está vazia</p>
          </div>
        )}
      </Container>
    </>
  )
}

export default Activity
