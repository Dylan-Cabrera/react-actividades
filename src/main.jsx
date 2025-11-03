import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App'
import { ApiHooks } from './pages/LosSimpsons'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApiHooks/>
  </StrictMode>,
)
