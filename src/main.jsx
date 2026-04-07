import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// GitHub Pages SPA redirect: restore path from query string
const params = new URLSearchParams(window.location.search)
const redirectPath = params.get('p')
if (redirectPath) {
  window.history.replaceState(null, '', decodeURIComponent(redirectPath))
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
