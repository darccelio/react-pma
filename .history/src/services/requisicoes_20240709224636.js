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

const category = () => {

  return useEffect() => {
    return fetch()
  }
  return (
    <div>
      <h1>Category</h1>
    </div>
  );
} 