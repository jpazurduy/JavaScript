import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Product from './Product.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Product />
    <App />
  </StrictMode>,
)
