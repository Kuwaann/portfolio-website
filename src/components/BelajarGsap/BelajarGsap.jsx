import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function GsapTimeline() {
    const timeline = gsap.timeline({
        repeat: -1,
        repeatDelay: 1,
        yoyo: true
    });

    useGSAP(() => {
        timeline.to('#white-box', {
            x: 250,
            rotation: 360,
            borderRadius: '100%',
            duration: 2,
            ease: 'back.inOut'
        })

        timeline.to('#white-box', {
            y: 250,
            scale: 2,
            rotation: 360,
            borderRadius: '100%',
            duration: 2,
            ease: 'back.inOut'
        })

        timeline.to('#white-box', {
            x: 500,
            scale: 1,
            rotation: 360,
            borderRadius: '8px',
            duration: 2,
            ease: 'back.inOut'
        })
    }, [])

    return (
        <>
            <h2>Gsap Timeline</h2>
            <button onClick={() => {
                if (timeline.paused()) {
                    timeline.play()
                } else {
                    timeline.pause()
                }
            }} className="bg-white text-black font-semibold text-2xl px-8 py-4 rounded-full w-fit hover:bg-[#C9C9C9] transition-all">Play/Pause</button>
            <div className="w-xs aspect-square bg-white rounded-sm" id="white-box">
            </div>
        </>
    )
}

export function GsapStagger() {
    useGSAP(() => {
        gsap.to('.stagger-box', {
            y: 250,
            rotation: 360,
            borderRadius: '100%',
            repeat: -1,
            yoyo: true,
            // stagger: 0.5,
            stagger: {
                amount: 1.5,
                grid: [1, 7],
                axis: 'x',
                ease: 'circ.inOut',
                from: 'center'
            }
        })
    }, [])

    return (
        <div className="flex gap-5">
            <div className="w-20 h-20 bg-indigo-200 rounded-lg stagger-box"></div>
            <div className="w-20 h-20 bg-indigo-300 rounded-lg stagger-box"></div>
            <div className="w-20 h-20 bg-indigo-400 rounded-lg stagger-box"></div>
            <div className="w-20 h-20 bg-indigo-500 rounded-lg stagger-box"></div>
            <div className="w-20 h-20 bg-indigo-600 rounded-lg stagger-box"></div>
            <div className="w-20 h-20 bg-indigo-700 rounded-lg stagger-box"></div>
            <div className="w-20 h-20 bg-indigo-800 rounded-lg stagger-box"></div>
        </div>
    )
}

export function GsapScrollTrigger() {
    const scrollRef = useRef();

    useGSAP(() => {
        const boxes = gsap.utils.toArray(scrollRef.current.children);
        boxes.forEach((box) => {
            gsap.to(box, {
                x: 150 * (boxes.indexOf(box) + 5),
                rotation: 360,
                borderRadius: '100%',
                scale: 1.5,
                scrollTrigger: {
                    trigger: box,
                    start: 'bottom bottom',
                    end: 'top 10%',
                    scrub: true,
                    ease: 'power1.inOut'
                }
            })
        })
    }, { scope: scrollRef })

    return (
        <div ref={scrollRef}>
            <div id="scroll-pink" className="w-20 h-20 bg-pink-500 rounded-lg scroll-box"></div>
            <div id="scroll-orange" className="w-20 h-20 bg-orange-500 rounded-lg scroll-box"></div>
        </div>
    )
}

export function GsapText() {
    useGSAP(() => {
        gsap.to('#text', {
            ease: 'power1.inOut',
            opacity: 1,
            y: 0,
        })

        gsap.fromTo('.para', {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            delay: 1,
            stagger: 0.1
        })
    }, [])

    return (
        <>
            <h1 id="text" className="opacity-0 translate-y-10">
                GsapText
            </h1>
            <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nisi quidem optio ipsa fugit laboriosam eaque voluptatem aperiam rerum quasi repellat ipsam accusantium tempore dignissimos numquam sit, vero sapiente! Sapiente?</p>
            <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nisi quidem optio ipsa fugit laboriosam eaque voluptatem aperiam rerum quasi repellat ipsam accusantium tempore dignissimos numquam sit, vero sapiente! Sapiente?</p>
            <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nisi quidem optio ipsa fugit laboriosam eaque voluptatem aperiam rerum quasi repellat ipsam accusantium tempore dignissimos numquam sit, vero sapiente! Sapiente?</p>
        </>
    )
}