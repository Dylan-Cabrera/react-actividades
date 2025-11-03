import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { FirstApp } from './components/FirstApp'

import { LosSimpsons } from './pages/losSimpsons'
import { Formulario } from '../src/pages/Formulario'
import { AppRouter } from './routes/AppRouter'



function App() {

  return (
    <>
        <AppRouter/>
    </>
  )
}

export default App
