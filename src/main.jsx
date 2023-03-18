import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './Pages/Home'

// Import global CSS
import './styles/global.css'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
