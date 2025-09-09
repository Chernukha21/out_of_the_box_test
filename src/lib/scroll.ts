import Lenis from 'lenis'
import { ScrollTrigger } from './gsap'

export function initSmoothScroll() {
    const lenis = new Lenis({ smoothWheel: true, lerp: 0.1 })
    function raf(t:number){ lenis.raf(t); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)
    lenis.on('scroll', ScrollTrigger.update)
}