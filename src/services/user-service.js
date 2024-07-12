const URL = `http://localhost:3000/user`

export async function GetUsers() {
  try {
    const response = await fetch(URL)
    const data = await response.json()

    console.log(`FETCH DATA: ${data.users}`)
    return data
  } catch (error) {
    console.error('Erro na requisição:', error)
    throw error
  }
}


export async function GetUserById(id) {
  try {
    const response = await fetch(`${URL}/${id}`)

    if(response.ok){
      const json = await response.json()
      console.log(`Json = ${json.user}`);
      return json.user
    }
    
  } catch (error) {
    console.error('Erro na requisição user:', error)
    throw error
  }
}

export async function RemoveUser(id) {

  try {
    const response = await fetch(`${URL}/${id}`, {
      method: 'DELETE',
    })

    
    if (!response.ok) {
      throw new Error(`Erro: ${response.status}`);
    }
    
  } catch (error) {
    console.error('Error deleting user:', error)
    throw error
  }
}


export async function UpdateUserById(id, user) {
  try {
    
    const response = await fetch(`${URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })

    return response.json();
    
    
  } catch (error) {
    console.error('Error updating user:', error)
    throw error
  }
}

export async function CreateUser(user){
  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })

    return response.json();
    
    
  } catch (error) {
    console.error('Error creating user:', error)
    throw error
  }
}