
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Ayat from './pages/Ayat'
import Surah from './pages/Surah'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path='/' element={<Surah/>}></Route>
            <Route path='/surah/:number/ayat' element={<Ayat/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
