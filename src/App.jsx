import { Routes, Route } from 'react-router'
import { HalamanBeranda } from './pages/HalamanBeranda/HalamanBeranda'
import { HalamanKarya } from './pages/HalamanKarya/HalamanKarya'
import { HalamanDetilKarya } from './pages/HalamanDetilKarya/HalamanDetilKarya'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'
import { useLocation } from 'react-router'
import { useEffect } from 'react'
import { HalamanKontak } from './pages/HalamanKontak/HalamanKontak'
import { HalamanTentang } from './pages/HalamanTentang/HalamanTentang'
import Lenis from 'lenis'
import './App.css'


gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  const { pathname } = useLocation();

  const lenis = new Lenis();
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Routes>
      <Route index element={<HalamanBeranda />} />
      <Route path="/works" element={<HalamanKarya />} />
      <Route path="/works/:slug" element={<HalamanDetilKarya />} />
      <Route path="/contact" element={<HalamanKontak />} />
      <Route path="/about" element={<HalamanTentang />} />
    </Routes >
  )
}

export default App
