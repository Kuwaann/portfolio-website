import { Routes, Route } from 'react-router'
import { HalamanBeranda } from './pages/HalamanBeranda/HalamanBeranda'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'
import './App.css'

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <Routes>
      <Route index element={<HalamanBeranda />}></Route>
    </Routes >
  )
}

export default App
