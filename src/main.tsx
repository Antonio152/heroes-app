import React from 'react'
import ReactDOM from 'react-dom/client'
import { HeroesApp } from './HeroesApp'
import { BrowserRouter as Router } from 'react-router-dom'
import './style.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <HeroesApp />
    </Router>
  </React.StrictMode>
)
