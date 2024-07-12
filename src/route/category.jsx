import { useEffect, useState } from 'react'
import {GetCategories, RemoveCategory} from '../services/category-service'
import Container from '../assets/components/Container/container'
import Card from '../assets/components/Card/card'
import Searchbar from '../assets/components/SearchBar/searchbar'

function Category() {
  const [categoryList, setCategoryList] = useState([])
  const [error, setError] = useState('')

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

  const handleRemove = async id => {
    console.log(`CATEGORY: ${id}`)
    try {
      await RemoveCategory(id)
      // Atualizar a lista de categorias após a remoção
      const updatedCategories = categoryList.filter(category => category.id !== id)
      setCategoryList(updatedCategories)
      console.log(`Categoria removida com sucesso: ${id}`)
    } catch (er) {
      setError(er)
      console.error(`Erro ao remover categoria ${id}: ${er}`)
    }

  }

  return (
    <>
      <div>
        <h1>Lista de Categorias</h1>
      </div>
      <Container>
      
        {categoryList.some ? (
          categoryList.map(category => (
            <div key={category.id}>
              <Card
                props={category}
                editPath={`/category/${category.id}`}
                handleRemove={() => handleRemove(category.id)}
                >
                <>
                  <p>Id: {category.id}</p>
                  <p>Descrição: {category.description}</p>
                </>
              </Card>
            </div>
          ))
        ) : (
          <div>
            <p>Lista de categorias está vazia</p>
          </div>
        )}
      </Container>
    </>
  )
}

export default Category
