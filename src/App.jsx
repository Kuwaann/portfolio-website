import { Routes, Route } from 'react-router'
import { HalamanBeranda } from './pages/HalamanBeranda/HalamanBeranda'
import { HalamanKarya } from './pages/HalamanKarya/HalamanKarya'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'
import './App.css'

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <Routes>
      <Route index element={<HalamanBeranda />}></Route>
      <Route path="/works" element={<HalamanKarya />}></Route>
    </Routes >
  )
}

export default App
