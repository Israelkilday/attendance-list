import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles/global.css"
import {Principal} from './pages/Principal'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Principal />
  </React.StrictMode>,
)
