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
          <div key={user.id}>
            <h1>Id: {user.id}</h1>
            <p>FirstName: {user.firstName}</p>
            <p>LastName: {user.LastName}</p>
            <p>password: {user.password}</p>
            <p>createdAt: {user.createdAt}</p>
            <p>updatedAt: {user.updatedAt}</p>
          </div>
        ))
      ) : (
        <div>
          <p>Lista de Usuarios está vazia</p>
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