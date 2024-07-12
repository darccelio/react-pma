import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  GetUserById,
  UpdateUserById,
  RemoveUser,
  CreateUser,
} from '../services/user-service'
import FormataData from '../services/uteis-service'
import Card from '../assets/components/Card/card'
import Container from '../assets/components/Container/container'

// const userDto = {
//   firstName: firstName,
//   lastName: lastName,
//   password: password,
//   createdAt: createdAt,
//   updatedAt: updatedAt,
// }

const userDto = {
  id: '',
  firstName: '',
  lastName: '',
  password: '',
  createdAt: '',
  updatedAt: '',
}

function UserDetail() {
  const { id } = useParams() // Captura o ID do usuário da URL
  const [user, setUser] = useState(userDto)
  const [error, setError] = useState('')
  const [editModeOpt, setEditModeOpt] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (id) {
      GetUserById(id)
        .then(data => {
          console.log(`USERID: ${id}`)
          setUser(data)
          setEditModeOpt(true) // Define o usuário recebido do servidor
        })
        .catch(err => {
          setError(`Erro ao carregar usuário: ${err.message}`)
        })
    }
    setEditModeOpt(false)
  }, [id])

  // const handleCreate =
  const handleEnviar = async ({ metodo, id }) => {
    try {

      console.log(`user.firstName.lenght ${user.firstName.lenght}`);
      if (metodo == 'put') {

        console.log(`PUTTT`);
        await UpdateUserById(id, user) // Chama a função de atualização
        console.log(`Usuário atualizado com sucesso: ${id}`)

        // Após a atualização, atualiza o estado local com os novos dados do usuário
        GetUserById(id)
          .then(data => {
            setUser(data) // Define o usuário recebido do servidor após a atualização
          })
          .catch(err => {
            setError(`Erro ao carregar usuário atualizado: ${err.message}`)
          })
      }
      if (metodo === 'post') {
          await CreateUser(user)
          console.log(`Usuário criado com sucesso: ${user}`)
      }
    } catch (err) {
      setError(`Erro ao atualizar usuário: ${err.message}`)
    }
  }

  const handleRemove = async id => {
    console.log(`UserDetail remove: ${id}`)
    try {
      await RemoveUser(id)
      // setUser('')
      navigate(-1)
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

  return (
    <Container>
      <Card
        props={user}
        editMode={true}
        editPath={`/users`}
        handleSave={handleEnviar}
        handleRemove={() => handleRemove(user.id)}
      >
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

export default UserDetail
