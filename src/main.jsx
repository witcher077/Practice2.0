import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import contextProvider from './ContextAPI/AppContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <contextProvider>
    <App />
    </contextProvider>
  </StrictMode>,
)
