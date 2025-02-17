import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import 'react-loading-skeleton/dist/skeleton.css'
import 'react-quill/dist/quill.snow.css';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
