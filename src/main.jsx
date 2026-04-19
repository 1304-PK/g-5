import React from 'react'
import ReactDOM from 'react-dom/client'
import WatchPage from './pages/WatchPage/WatchPage'
import Home from './pages/Home'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WatchPage />
    <Home />
  </React.StrictMode>,
)
