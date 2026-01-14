"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { AnimatedText } from "@/components/animated-text"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-btn";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [isAutoScroll, setIsAutoScroll] = useState(true)

  // Reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  // Auto-scroll carousel
  useEffect(() => {
    if (!carouselRef.current || !isAutoScroll) return

    const carousel = carouselRef.current
    const scrollSpeed = 1
    let scrollAmount = 0
    let animationId: NodeJS.Timeout

    const autoScroll = () => {
      carousel.scrollLeft += scrollSpeed
      scrollAmount += scrollSpeed

      if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth - 50) {
        if (scrollAmount > carousel.scrollWidth / 2) {
          carousel.scrollLeft = 0
          scrollAmount = 0
        }
      }

      animationId = setTimeout(autoScroll, 30)
    }

    animationId = setTimeout(autoScroll, 30)

    const stop = () => setIsAutoScroll(false)
    const start = () => setIsAutoScroll(true)

    carousel.addEventListener("mouseenter", stop)
    carousel.addEventListener("mouseleave", start)

    return () => {
      clearTimeout(animationId)
      carousel.removeEventListener("mouseenter", stop)
      carousel.removeEventListener("mouseleave", start)
    }
  }, [isAutoScroll])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden bg-background"
    >
      
  {/* Radial Gradient Background */}
  <div
    className="absolute inset-0 "
    style={{
      background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
    }}
  />
    
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* LEFT — Heading only */}
          <div>
            <div className="reveal opacity-0 mb-8 inline-flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <p className="text-sm text-primary font-medium">iOS • Android • MVPs • Full Applications</p>
            </div>

            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-[1.15] text-foreground text-balance">
              <AnimatedText text="Mobile app development " delay={0.2} />
              <br />
              <span className="text-primary italic">
                <AnimatedText text="for your business" delay={0.4} />
              </span>
            </h1>
          </div>

          {/* RIGHT — Paragraph + CTAs */}
          <div className="reveal opacity-0 animation-delay-400 max-w-lg">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We help startups and businesses design and develop mobile applications — from early MVPs to full-scale production apps. Our focus is clean architecture, great user experience, and scalable mobile solutions.

            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="outline" className="rounded-full px-14 py-6 text-base bg-primary text-white hover:text-primary-foreground">
                Book a free consultation
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Button>
              <InteractiveHoverButton className="md:w-56 w-full" text="View our Works" />
            </div>
          </div>
        </div>
      </div>

      {/* IMAGE CAROUSEL — now breaks out to full width of screen */}
      <div className="reveal opacity-0 animation-delay-700 w-screen relative left-1/2 right-1/2 -mx-[50vw] py-2">
        <div
          ref={carouselRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory px-6 lg:px-8 py-4"
        >
          {[
            "/images/product-serenity.png",
            "/images/product-vitality.png",
            "/images/product-equilibrium.png",
            "/images/mission-background.png",
            "/images/hero-biometic.png",
          ]
            .concat([
              "/images/product-serenity.png",
              "/images/product-vitality.png",
              "/images/product-equilibrium.png",
              "/images/mission-background.png",
              "/images/hero-biometic.png",
            ])
            .map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-80 h-96 rounded-2xl overflow-hidden snap-center border-gray-200 p-2"
              >
                <img
                  src={src || "/placeholder.svg"}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-500 rounded-2xl hover:scale-105"
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
