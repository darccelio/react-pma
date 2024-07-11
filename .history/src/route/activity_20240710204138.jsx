
import { useEffect, useState } from 'react'
import GetActivities from '../services/activity-service'

function Activity() {
  const [activityList, setCategoryList] = useState([])

  useEffect(() => {
    GetActivities()
      .then(data => {
        const categories = data.categories || []
        setCategoryList(categories)
      })
      .catch(err => {
        console.error(`Erro: ${err}`)
        setCategoryList([])
      })
  }, [])

  return (
    <>
      {activityList.some ? (
        activityList.map(category => (
          <div key={category.id}>
            <h1>Id: {category.id}</h1>
            <p>Descrição: {category.description}</p>
          </div>
        ))
      ) : (
        <div>
          <p>Lista de categorias está vazia</p>
        </div>
      )}
    </>
  )
}

export default Activity
