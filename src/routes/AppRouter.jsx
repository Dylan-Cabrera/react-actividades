import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { PublicRouter } from './PublicRouter'
import { Formulario } from '../pages/Formulario'
import { PrivateRouter } from './PrivateRouter'
import { FirstApp } from '../components/FirstApp'
import { LosSimpsons } from '../pages/losSimpsons'



export const AppRouter = () => {
  return (
    <Routes>
        <Route element={<PublicRouter/>}>
            <Route path='/2' element={<Formulario/>}/>
        </Route>

        <Route element={<PrivateRouter/>}>
            <Route path='/' element={<FirstApp/>}/>
            <Route path='/3' element={<LosSimpsons/>}/>
        </Route>


              {/* para cualquier otro path */}
            <Route path='*' element={<Navigate to="/" />}/>
        </Routes>
  )
}
