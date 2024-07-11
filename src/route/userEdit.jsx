import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetUserById, UpdateUserById } from '../services/user-service'
import FormataData from '../services/uteis-service'
import Card from '../assets/components/Card/card'
import Container from '../assets/components/Container/container'

function EditUser() {
  const { userId } = useParams() // Captura o ID do usuário da URL
  const [user, setUser] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    if (userId) {
      GetUserById(userId)
        .then(data => {
          setUser(data) // Define o usuário recebido do servidor
        })
        .catch(err => {
          setError(`Erro ao carregar usuário: ${err.message}`)
        })
    }
  }, [userId])

  const handleUpdate = async () => {
    try {
      await UpdateUserById(userId, user) // Chama a função de atualização
      console.log(`Usuário atualizado com sucesso: ${userId}`)

      // Após a atualização, atualiza o estado local com os novos dados do usuário
      GetUserById(userId)
        .then(data => {
          setUser(data) // Define o usuário recebido do servidor após a atualização
        })
        .catch(err => {
          setError(`Erro ao carregar usuário atualizado: ${err.message}`)
        })
    } catch (err) {
      setError(`Erro ao atualizar usuário: ${err.message}`)
    }
  }

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
  

  const handleChange = e => {
    const { name, value } = e.target
    setUser(prevUser => ({
      ...prevUser,
      [name]: value,
    }))
  }

  if (!user) {
    return <p>Carregando usuário...</p>
  }

  return (
    <Container>
      <Card props={user} editMode={true} editPath={`/users`} handleSave={handleUpdate} handleRemove={() => handleRemove(user.id)}>
        <>
          <label htmlFor="firstName">Primeiro Nome:</label>
          <input
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
          />

          <label htmlFor="lastName">Último Nome:</label>
          <input
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
          />

          <label htmlFor="password">Senha:</label>
          <input
            type="text"
            name="password"
            value={user.password}
            onChange={handleChange}
          />

          <p>CreatedAt: {FormataData(user.createdAt)}</p>
          <p>UpdatedAt: {FormataData(user.updatedAt)}</p>
        </>
      </Card>
      {error && <p>Erro ao editar usuário: {error}</p>}
    </Container>
  )
}

export default EditUser
