

const URL = `http://localhost:3000/user`

async function GetCategory() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    
    console.log(`FETCH DATA: ${data.users}`);
    return data;
  } catch (error) {
    console.error('Erro na requisição:', error);
    throw error;
  }
}

export default GetCategory