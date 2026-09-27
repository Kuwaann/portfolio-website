import { Routes, Route } from 'react-router'
import { HalamanBeranda } from './pages/HalamanBeranda/HalamanBeranda'
import { HalamanKarya } from './pages/HalamanKarya/HalamanKarya'
import { HalamanDetilKarya } from './pages/HalamanDetilKarya/HalamanDetilKarya'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'
import { useLocation } from 'react-router'
import './App.css'
import { useEffect } from 'react'


gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Routes>
      <Route index element={<HalamanBeranda />} />
      <Route path="/works" element={<HalamanKarya />} />
      <Route path="/works/:slug" element={<HalamanDetilKarya />} />
    </Routes >
  )
}

export default App
