// import React, { useEffect } from 'react';

// const URL = 'http:\\localhost:3000'

// const MyComponent = (act) => {

//   useEffect(() => {
//     // Create a new activity
//     fetch('http://localhost:3000/activity', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         description: 'New activity',
//         userId: 1,
//         categoryId: 1
//       })
//     })
//       .then(response => response.json())
//       .then(data => console.log(data))
//       .catch(error => console.error(error));

//     // Read all activities
//     fetch('http://localhost:3000/activity')
//       .then(response => response.json())
//       .then(data => console.log(data))
//       .catch(error => console.error(error));

//     // Read a specific activity
//     fetch('http://localhost:3000/activity/1')
//       .then(response => response.json())
//       .then(data => console.log(data))
//       .catch(error => console.error(error));

//     // Update an activity
//     fetch('http://localhost:3000/activity/1', {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         description: 'Updated activity'
//       })
//     })
//       .then(response => response.json())
//       .then(data => console.log(data))
//       .catch(error => console.error(error));

//     // Delete an activity
//     fetch('http://localhost:3000/activity/1', {
//       method: 'DELETE'
//     })
//       .then(response => response.json())
//       .then(data => console.log(data))
//       .catch(error => console.error(error));
//   }, []);

//   return <div>My Component</div>;
// };

// export default MyComponent;


// // // Create a new activity
// // fetch('http://localhost:3000/activity', {
// //   method: 'POST',
// //   headers: {
// //     'Content-Type': 'application/json'
// //   },
// //   body: JSON.stringify({
// //     description: 'New activity',
// //     userId: 1,
// //     categoryId: 1
// //   })
// // })
// //   .then(response => response.json())
// //   .then(data => console.log(data))
// //   .catch(error => console.error(error));

// // // Read all activities
// // fetch('http://localhost:3000/activity')
// //   .then(response => response.json())
// //   .then(data => console.log(data))
// //   .catch(error => console.error(error));

// // // Read a specific activity
// // fetch('http://localhost:3000/activity/1')
// //   .then(response => response.json())
// //   .then(data => console.log(data))
// //   .catch(error => console.error(error));

// // // Update an activity
// // fetch('http://localhost:3000/activity/1', {
// //   method: 'PUT',
// //   headers: {
// //     'Content-Type': 'application/json'
// //   },
// //   body: JSON.stringify({
// //     description: 'Updated activity'
// //   })
// // })
// //   .then(response => response.json())
// //   .then(data => console.log(data))
// //   .catch(error => console.error(error));

// // // Delete an activity
// // fetch('http://localhost:3000/activity/1', {
// //   method: 'DELETE'
// // })
// //   .then(response => response.json())
// //   .then(data => console.log(data))
// //   .catch(error => console.error(error));
const Category = () => {
  useEffect(() => {
    GetCategory()
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }, []);

  return <div>Category Component</div>;
};

export default Category;

// import { useEffect } from 'react';
import React, { useEffect } from 'react';
// import GetCategory from '../services/requisicoes';

const URL = `http://localhost:3000/category`

const GetCategory = () => {
  console.log("Chamou:")

  return useEffect( () => {
      return fetch(URL, {
        method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
      }.then( res => res.json())
      .then(json => json.status == 200 ? json.category : new Error(json.message)))
      .catch(err => err.message)    
  },[]
)}
// export default GetCategory;

