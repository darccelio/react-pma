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


import { useEffect } from 'react';

const URL = `http://localhost:3000/category`

const category =  () => {
  return useEffect( () => {
      return fetch(URL, {
        method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
      }.then( res => res.json())
      .then(json => json.status == 200 ? json.category : new Error(json.message)))
      .catch( err => err.message)    
  },[]
)}
export category


import React from 'react'

export const index = () => {
  return (
    <div>index</div>
  )
}

/*
try {
      const response = await fetch(url_get, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
      });
      return response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  },

*/