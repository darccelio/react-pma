import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './RoutesApp.jsx';
// import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <AppRoutes />
  </React.StrictMode>,
)
