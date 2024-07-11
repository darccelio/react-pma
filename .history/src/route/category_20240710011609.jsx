import { useEffect, useState } from 'react'
import GetCategory from '../services/requisicoes'

function Category() {
  // const [category, setCategory] = useState()
  const [categoryList, setCategoryList] = useState([])

    // GetCategory()
    //   .then(data => setCategoryList(data))
    //   .catch(err => console.log(`Erro: ${err}`)); 


    useEffect(() => {
      GetCategory()
        .then(data => {
          // Supondo que data seja { category: [...] }
          const categories = data.categories || [];

          console.log(`categories: ${categories}`);
          setCategoryList(categories);
        })
        .catch(err => {
          console.error(`Erro: ${err}`);
          setCategoryList([]);
        });
    }, []);

  return (
    <>
      {categoryList.some ? (
        categoryList.map(category => (
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
  );
}

export default Category
