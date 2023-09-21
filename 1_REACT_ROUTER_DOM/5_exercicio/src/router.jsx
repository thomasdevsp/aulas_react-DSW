import {Routes, Route} from 'react-router-dom'
import { Eu } from './Pages/Eu'
import { Te } from './Pages/Te'
import { Amo } from './Pages/Amo'
import { Cora } from './Pages/Cora'



export function Router() {
  return (
    <Routes>
        <Route path='/' element={<Eu />}></Route>
        <Route path='/Te' element={<Te />}></Route>
        <Route path='/Amo' element={<Amo />}></Route>
        <Route path='/Cora' element={<Cora />}></Route>        
    </Routes>
  )
}