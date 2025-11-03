import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FirstApp } from './components/FirstApp'

import { LosSimpsons } from './pages/losSimpsons'
import { Formulario } from './pages/formulario'



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<FirstApp/>}/>
            <Route path='/2' element={<Formulario/>}/>
            <Route path='/3' element={<LosSimpsons/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
