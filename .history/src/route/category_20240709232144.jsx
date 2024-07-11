import { useState} from 'react'
import GetCategory from '../services/requisicoes'

function Category() {

  // const [category, setCategory] = useState()
  const [categoryList, setCategoryList] = useState([])
  
  GetCategory()
  .then(data => {
    setCategoryList(data)
  })

  
  return (
    categoryList.length > 0 ? (categoryList.map( (category) => (
      <div key={category.id}>
        <h1>{category.name}</h1>
        <p>{category.description}</p>
      </div>
    ))}
  )
  : (
    <p>
      <i>No contacts</i>
    </p>
  )}
}

export default Category