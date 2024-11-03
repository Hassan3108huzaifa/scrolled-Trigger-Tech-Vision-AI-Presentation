'use client'

import { useRef, useEffect } from 'react'
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion'
import ContentSection from './ContentSection'
import Technology from './Technology'
import AdditionalContent from './AdditionalContent'
import Footer from './Footer'

const TOTAL_FRAMES_EARTH = 601
const TOTAL_FRAMES_TECH = 601

export default function Component() {

    const scrollingRef = useRef<number | null>(null);

    useEffect(() => {
      let target = window.scrollY;
      let current = window.scrollY;
  
      const ease = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  
      const animate = () => {
        const diff = target - current;
        const delta = Math.abs(diff) < 0.1 ? diff : diff * 0.1;
        
        if (Math.abs(delta) < 0.1) {
          window.scrollTo(0, target);
          scrollingRef.current = null;
          return;
        }
        
        current += delta;
        window.scrollTo(0, Math.round(current));
        scrollingRef.current = requestAnimationFrame(animate);
      };
  
      const smoothScroll = (e: WheelEvent) => {
        e.preventDefault();
  
        const scrollAmount = ease(Math.min(Math.abs(e.deltaY) / 100, 1)) * (e.deltaY > 0 ? 1 : -1) * window.innerHeight * 0.5;
        target = Math.max(0, Math.min(target + scrollAmount, document.body.scrollHeight - window.innerHeight));
  
        if (!scrollingRef.current) {
          scrollingRef.current = requestAnimationFrame(animate);
        }
      };
  
      window.addEventListener('wheel', smoothScroll, { passive: false });
  
      return () => {
        window.removeEventListener('wheel', smoothScroll);
        if (scrollingRef.current) {
          cancelAnimationFrame(scrollingRef.current);
        }
      };
    }, []);





    const containerRef = useRef<HTMLDivElement>(null)
    const earthCanvasRef = useRef<HTMLCanvasElement>(null)
    const techCanvasRef = useRef<HTMLCanvasElement>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start']
    })

    const currentEarthFrame = useTransform(scrollYProgress, [0, 1], [5, TOTAL_FRAMES_EARTH + 1])
    const currentTechFrame = useTransform(scrollYProgress, [0, 2], [0, TOTAL_FRAMES_TECH]); // Start from 0
    const contentY = useTransform(scrollYProgress, [0.155, 0.05], ['100%', '0%'])

    useEffect(() => {
        const renderVideo = (
            canvasRef: React.RefObject<HTMLCanvasElement>,
            currentFrame: MotionValue<number>,
            totalFrames: number,
            prefix: string
        ) => {
            const context = canvasRef.current?.getContext('2d')
            if (!context) return

            const images: HTMLImageElement[] = []
            let requestId: number

            const preloadImages = () => {
                const promises = []
                for (let i = 1; i <= totalFrames; i++) {
                    const img = new Image()
                    img.src = `/${prefix}/${i}.webp`
                    promises.push(new Promise((resolve) => {
                        img.onload = resolve
                        img.onerror = resolve // Ensure resolve on error too
                    }))
                    images.push(img)
                }
                return Promise.all(promises)
            }

            const render = () => {
                // Calculate the frame index using modulo for looping
                const frameIndex = Math.floor(currentFrame.get()) % totalFrames; // This allows the frames to loop continuously
                if (frameIndex >= 0 && frameIndex < totalFrames) {
                    const img = images[frameIndex];
                    if (img.complete && img.naturalHeight !== 0) {
                        context.clearRect(0, 0, context.canvas.width, context.canvas.height)
                        context.drawImage(img, 0, 0, context.canvas.width, context.canvas.height)
                    }
                }
                requestId = requestAnimationFrame(render)
            }

            preloadImages().then(() => {
                render()
            })

            return () => cancelAnimationFrame(requestId)
        }

        const earthCleanup = renderVideo(earthCanvasRef, currentEarthFrame, TOTAL_FRAMES_EARTH, 'earth')
        const techCleanup = renderVideo(techCanvasRef, currentTechFrame, TOTAL_FRAMES_TECH, 'video1')

        return () => {
            if (earthCleanup) {
                earthCleanup()
            }
            if (techCleanup) {
                techCleanup()
            }
        }
    }, [currentEarthFrame, currentTechFrame])

    return (
        <div className="relative bg-gray-50">
            <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
                <div className="container mx-auto px-4 py-6">
                    <h1 className="text-3xl font-bold text-white">TechVision AI</h1>
                </div>
            </nav>

            <div ref={containerRef} className="h-[400vh]">
                {/* Earth Video Section */}
                <div className="sticky top-0 h-screen w-full overflow-hidden">
                    <canvas
                        ref={techCanvasRef}
                        width={1920}
                        height={1080}
                        className="w-full h-full object-cover"
                    />
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-50"
                        style={{ y: contentY }}
                    />
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ y: contentY }}
                    >
                        <div className="text-center text-white">
                            <h2 className="text-5xl font-bold mb-4">Revolutionizing the Future with AI</h2>
                            <p className="text-xl mb-8 max-w-2xl mx-auto">
                                At TechVision AI, we&apos;re at the forefront of technological innovation, harnessing the power of
                                artificial intelligence to transform industries and improve lives globally.
                            </p>
                            <button className="bg-white text-blue-600 font-bold py-2 px-6 rounded-full hover:bg-blue-100 transition duration-300">
                                Discover More
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Content Section */}
                <ContentSection contentY={contentY} />

                {/* Technology Video Section */}
                <div className="sticky top-0 h-screen w-full overflow-hidden">
                    <canvas
                        ref={earthCanvasRef}
                        width={1920}
                        height={1080}
                        className="w-full h-full object-cover"
                    />
                    <Technology />
                </div>
            </div>

            {/* Additional Content Section */}
            <AdditionalContent />

            <Footer />
        </div>
    )
}
