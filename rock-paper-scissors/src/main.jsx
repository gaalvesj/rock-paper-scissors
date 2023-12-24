import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Footer from './components/Footer.jsx'
import Play from './components/Play.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Play />
    <Footer />
  </React.StrictMode>,
)
