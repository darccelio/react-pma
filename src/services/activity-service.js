const URL = `http://localhost:3000/activity`

export async function GetActivities() {
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

export async function GetActivityById(id) {
  try {
    const response = await fetch(`${URL}/${id}`);
    const data = await response.json();
    
    console.log(`FETCH DATA: ${data.activity}`);
    return data;
  } catch (error) {
    console.error('Erro na requisição:', error);
    throw error;
  }
}

export async function CreateActivity(activity) {
  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(activity),
    });
    const data = await response.json();
    
    console.log(`FETCH DATA: ${data.activity}`);
    return data;
  } catch (error) {
    console.error('Erro na requisição:', error);
    throw error;
  }
}

export async function UpdateActivityById(id, activity) {
  try {
    const response = await fetch(`${URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(activity),
    });
    const data = await response.json();
    
    console.log(`FETCH DATA: ${data.activity}`);
    return data;
  } catch (error) {
    console.error('Erro na requisição:', error);
    throw error;
  }
}

export async function RemoveActivity(id) {
  try {
    const response = await fetch(`${URL}/${id}`, {
      method: 'DELETE',
    });

    if (response.status === 204) {
      console.log(`ACTIVITY REMOVED: Activity with ID ${id} successfully removed.`);
      return { success: true };
    }
    else{
      console.error(`ACTIVITY not REMOVED: Activity with ID ${id} not removed.`);
      throw new Error(response.message)
    }
    
  } catch (error) {
    console.error('Error deleting activity:', error);
    throw error;
  }
}

export async function GetActivitiesByUserId(userId) {
  try {
    const response = await fetch(`${URL}/user/${userId}`);
    const data = await response.json();
    
    console.log(`FETCH DATA: ${data.activities}`);
    return data;
  } catch (error) {
    console.error('Erro na requisição:', error);
    throw error;
  }
}

export async function GetActivitiesByCategoryId(categoryId) {
  try {
    const response = await fetch(`${URL}/category/${categoryId}`);
    const data = await response.json();
    
    console.log(`FETCH DATA: ${data.activities}`);
    return data;
  } catch (error) {
    console.error('Erro na requisição:', error);
    throw error;
  }
}

export async function GetActivitiesByDateRange(startDate, endDate) {
  try {
    const response = await fetch(`${URL}/date/${startDate}/${endDate}`);
    const data = await response.json();
    
    console.log(`FETCH DATA: ${data.activities}`);
    return data;
  } catch (error) {
    console.error('Erro na requisição:', error);
    throw error;
  }
}