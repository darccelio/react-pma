import { useState } from 'react'
import GetCategory from '../services/requisicoes'

function Category() {
  // const [category, setCategory] = useState()
  const [categoryList, setCategoryList] = useState([])

  GetCategory().then(data => {
    setCategoryList(data)
  })

  return (
    <>
      {categoryList.length ? (
        categoryList.map((category) => (
          <div key={category.id}>
            <h1>{category.name}</h1>
            <p>{category.description}</p>
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
