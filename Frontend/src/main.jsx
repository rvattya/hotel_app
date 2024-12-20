import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Admin from './Admin.jsx'

import './App.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Admin/> */}
  </StrictMode>,
)
