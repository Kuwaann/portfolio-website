import { Routes, Route } from 'react-router'
import { HalamanBeranda } from './pages/HalamanBeranda/HalamanBeranda'
import { HalamanKarya } from './pages/HalamanKarya/HalamanKarya'
import { HalamanDetilKarya } from './pages/HalamanDetilKarya/HalamanDetilKarya'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'
import { useLocation } from 'react-router'
import { useEffect, useRef } from 'react'
import { HalamanKontak } from './pages/HalamanKontak/HalamanKontak'
import { HalamanTentang } from './pages/HalamanTentang/HalamanTentang'
import Lenis from 'lenis'
import './App.css'


gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  const { pathname } = useLocation();

  const lenisRef = useRef();

  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;
    lenis.on('scroll', ScrollTrigger.update);

    const tickerCallback = (time) => {
      lenis.raf(time * 1000);
    }

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      lenisRef.current = null;
    }
  }, [])

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }

    window.scrollTo(0, 0);

    ScrollTrigger.clearScrollMemory?.();

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 50);

    return () => clearTimeout(timer);
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
