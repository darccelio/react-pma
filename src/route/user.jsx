import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { GetUsers, RemoveUser } from '../services/user-service'
import FormataData from '../services/uteis-service'
import Card from '../assets/components/Card/card'
import Container from '../assets/components/Container/container'


export default function User() {
  const [userList, setUserList] = useState([])
  const [error, setError] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
    GetUsers()
      .then(data => {
        const users = data.users || []
        setUserList(users)
      })
      .catch(err => {
        console.error(`Erro: ${err}`)
        setUserList([])
      })
  }, [])

  const handleRemove = async id => {
    console.log(`USER: ${id}`)
    try {
      await RemoveUser(id)
      // Atualizar a lista de usuários após a remoção
      const updatedUsers = userList.filter(user => user.id !== id)
      setUserList(updatedUsers)
      console.log(`Usuário removido com sucesso: ${id}`)
    } catch (er) {
      setError(er)
      console.error(`Erro ao remover usuário ${id}: ${er}`)
    }
  }

  const handleClickNovo = () => {
    navigate("/user/new");    
  };

  return (
    <>
      <div>
        <h1>Lista de Usuários</h1>
      </div>
      <Container>       
        <div>
          <button
            id="novo"
            type="button"
            onClick={handleClickNovo}
          >
            Criar Usuário
          </button>
        </div>
        {userList.some ? (
          userList.map(user => (
            <div key={user.id}>
              <Card
                props={user}
                editPath={`/user/${user.id}`}
                handleRemove={() => handleRemove(user.id)}
                title={`Usuário: ${user.id}`}
              >
                <>
                  <p>Id: {user.id}</p>
                  <p>
                    name:{' '}
                    {user.firstName || user.lastName
                      ? `${user.firstName} ${user.lastName}`
                      : 'Usuário desconhecido'}
                  </p>
                  <p>password: {user.password}</p>
                  <p>createdAt: {FormataData(user.createdAt)}</p>
                  <p>updatedAt: {FormataData(user.updatedAt)}</p>
                </>
              </Card>
              {error && <p>Erro ao remover: {error}</p>}
            </div>
          ))
        ) : (
          <div>
            <p>Lista de Usuários está vazia</p>
          </div>
        )}
      </Container>
    </>
  );
}
