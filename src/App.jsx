import { Routes, Route } from 'react-router'
import { HalamanBeranda } from './pages/HalamanBeranda/HalamanBeranda'
import './App.css'

function App() {
  return (
    <Routes>
      <Route index element={<HalamanBeranda />}></Route>
    </Routes >
  )
}

export default App
