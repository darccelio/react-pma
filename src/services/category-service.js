


const URL = `http://localhost:3000/category`

export async function GetCategories() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    
    console.log(`FETCH DATA: ${data.categories}`);
    return data;
  } catch (error) {
    console.error('Erro na requisição:', error);
    throw error;
  }
}

export async function GetCategoryById(id) {
  try {
    const response = await fetch(`${URL}/${id}`);
    const data = await response.json();
    
    console.log(`FETCH DATA: ${data.category}`);
    return data;
  } catch (error) {
    console.error('Erro na requisição:', error);
    throw error;
  }
}

export async function CreateCategory(category) {
  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(category),
    });
    const data = await response.json();
    
    console.log(`FETCH DATA: ${data.category}`);
    return data;
  } catch (error) {
    console.error('Erro na requisição:', error);
    throw error;
  }
}

export async function UpdateCategoryById(id, category) {
  try {
    const response = await fetch(`${URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(category),
    });
    const data = await response.json();
    
    console.log(`FETCH DATA: ${data.category}`);
    return data;
  } catch (error) {
    console.error('Erro na requisição:', error);
    throw error;
  }
}

export async function RemoveCategory(id) {
  try {
    const response = await fetch(`${URL}/${id}`, {
      method: 'DELETE', headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Erro: ${response.status}`);
    }

    return;
  } catch (error) {
    console.error('Erro na requisição:', error);
    throw error;
  }
}

