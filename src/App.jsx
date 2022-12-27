import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokemonById from './pages/PokemonById'
import ProtectedRoutes from './pages/ProtectedRoutes'
import Footer from './components/shared/Footer'

function App() {
  

  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        
        <Route element={<ProtectedRoutes />} >
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/pokedex/:id' element={<PokemonById />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
