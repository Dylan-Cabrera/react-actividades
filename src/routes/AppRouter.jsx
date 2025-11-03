import { Navigate, Route, Routes } from 'react-router-dom'
import { FirstApp } from '../components/FirstApp'
import { Formulario } from '../pages/Formulario'
import { LosSimpsons } from '../pages/LosSimpsons'




export const AppRouter = () => {
  return (
    <Routes>
            <Route path='/form' element={<Formulario/>}/>
            <Route path='/firstapp' element={<FirstApp/>}/>
            <Route path='/api' element={<LosSimpsons/>}/>

              {/* para cualquier otro path */}
            <Route path='*' element={<Navigate to="/firstapp" />}/>
        </Routes>
  )
}
