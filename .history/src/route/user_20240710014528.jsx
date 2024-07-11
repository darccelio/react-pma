import { useEffect, useState } from 'react'
import GetUsers from '../services/user-service'

function User() {
  
  const [userList, setUserList] = useState([])

    useEffect(() => {
      GetUsers()
        .then(data => {
          
          const users = data.users || [];          
          setUserList(users);
        })
        .catch(err => {
          console.error(`Erro: ${err}`);
          setUserList([]);
        });
    }, []);

  return (
    <>
      {userList.some ? (
        userList.map(category => (
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
  );
}

{
  "id": 2,
  "firstName": "José",
  "lastName": "Teste",
  "password": "123456",
  "createdAt": "2024-07-07T20:53:14.047Z",
  "updatedAt": "2024-07-07T20:53:14.047Z"
}

export default User