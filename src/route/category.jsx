import { useEffect, useState } from 'react'
import GetCategories from '../services/category-service'

function Category() {
  const [categoryList, setCategoryList] = useState([])

  useEffect(() => {
    GetCategories()
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
      {categoryList.some ? (
        categoryList.map(category => (
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

export default Category
