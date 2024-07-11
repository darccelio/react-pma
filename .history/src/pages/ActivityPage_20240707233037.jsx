// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ActivityPage = () => {
//   const [activities, setActivities] = useState([]);
//   const [newActivity, setNewActivity] = useState({
//     description: '',
//     userId: null,
//     categoryId: null,
//   });

//   useEffect(() => {
//     fetchActivities();
//   }, []);

//   const fetchActivities = async () => {
//     try {
//       const response = await axios.get('/api/activities');
//       setActivities(response.data);
//     } catch (error) {
//       console.error('Error fetching activities:', error);
//     }
//   };

//   const createActivity = async () => {
//     try {
//       const response = await axios.post('/api/activities', newActivity);
//       setActivities([...activities, response.data]);
//       setNewActivity({ description: '', userId: null, categoryId: null });
//     } catch (error) {
//       console.error('Error creating activity:', error);
//     }
//   };

//   const deleteActivity = async (id) => {
//     try {
//       await axios.delete(`/api/activities/${id}`);
//       setActivities(activities.filter((activity) => activity.id !== id));
//     } catch (error) {
//       console.error('Error deleting activity:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Activity Page</h1>

//       <h2>Create Activity</h2>
//       <input
//         type="text"
//         value={newActivity.description}
//         onChange={(e) =>
//           setNewActivity({ ...newActivity, description: e.target.value })
//         }
//       />
//       {/* Add dropdowns for userId and categoryId here */}

//       <button onClick={createActivity}>Create</button>

//       <h2>Activities</h2>
//       {activities.map((activity) => (
//         <div key={activity.id}>
//           <p>{activity.description}</p>
//           {/* Display userId and categoryId here */}
//           <button onClick={() => deleteActivity(activity.id)}>Delete</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ActivityPage;

import React, { useEffect, useState } from 'react';
import Api from './../services/Api';

const ActivityPage = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await Api.get('activities');
        setActivities(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchActivities();
  }, []);

  return (
    <div>
      <h1>Activities</h1>
      {activities.map((activity) => (
        <div key={activity.id}>
          <h3>{activity.description}</h3>
          <p>User: {activity.user.name}</p>
          <p>Category: {activity.category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ActivityPage;