import { useEffect, useState } from 'react'
import { GetUsers, RemoveUser } from '../services/user-service'
import FormataData from '../services/uteis-service'
import Card from '../assets/components/Card/card'
import Container from '../assets/components/Container/container'

export default function User() {
  const [userList, setUserList] = useState([])
  const [error, setError] = useState('')

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

  return (
    <>
      <div>
        <h1>Lista de Usuários</h1>
      
      </div>
      <Container>
        {userList.some ? (
          userList.map(user => (
            <div key={user.id}>
              <Card
                props={user}
                editPath={`/user/${user.id}`}
                handleRemove={() => handleRemove(user.id)}
              >
                <>
                  <p>id: {user.id}</p>
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
            <p>Lista de Usuarios está vazia</p>
          </div>
        )}
      </Container>
    </>
  )
}
