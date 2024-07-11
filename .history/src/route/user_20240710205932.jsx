import { useEffect, useState } from 'react'
import GetUsers from '../services/user-service'
import FormataData from '../services/uteis-service';



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
        userList.map(user => (
          <div key={user.id}>
            <h1>Id: {user.id}</h1>
            <p>FirstName: {user.firstName}</p>
            <p>LastName: {user.LastName}</p>
            <p>password: {user.password}</p>
            <p>createdAt: {FormataData(user.createdAt)}</p>
            <p>updatedAt: {FormataData(user.updatedAt)}</p>
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

export default User