import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' // अगर आपके पास index.css है, वरना इसे हटा दें

// यहाँ से BrowserRouter हटा दिया गया है क्योंकि वह App.jsx में है
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)