import { useState} from 'react'
import GetCategory from '../services/requisicoes'

function Category() {

  // const [category, setCategory] = useState()
  const [categoryList, setCategoryList] = useState([])
  
  const list = GetCategory()

  
  return (
    <div>Category</div>
  )
}

export default Category