const URL = `http://localhost:3000/activity`

async function GetCategories() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    
    console.log(`FETCH DATA: ${data.activities}`);
    return data;
  } catch (error) {
    console.error('Erro na requisição:', error);
    throw error;
  }
}

export default GetCategories