"use client"

import { useEffect, useRef } from "react"
import { ScrollBlurText } from "./scroll-blur-text"

const testimonials = [
  {
    metric: "2.5M+",
    metricLabel: "Downloads",
    quote:
      "Webbeesolutions built an incredible app for us. The quality and attention to detail exceeded all expectations.",
    author: "Sarah Chen",
    role: "Founder, TechStart",
  },
  {
    metric: "98%",
    metricLabel: "User Satisfaction",
    quote: "Best development team we've worked with. They understood our vision and delivered beyond what we imagined.",
    author: "Marcus Johnson",
    role: "CEO, StartupXYZ",
  },
  {
    metric: "6 months",
    metricLabel: "To Launch",
    quote: "From concept to a fully-featured app in production. Their process is efficient and professional.",
    author: "Emily Rodriguez",
    role: "Product Lead, AppCo",
  },
  {
    metric: "4.8/5",
    metricLabel: "App Rating",
    quote: "Users love our app because of its design and functionality. Webbeesolutions made that possible.",
    author: "David Park",
    role: "Founder, MobileApp Inc",
  },
]

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)

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

  return (
    <section ref={sectionRef} id="temoignages" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20 lg:mb-24">
          <p className="reveal opacity-0 text-sm uppercase tracking-[0.2em] text-secondary font-medium mb-4">
            Client Success
          </p>
          <ScrollBlurText
            text="Loved by founders"
            className="font-serif text-4xl md:text-5xl lg:text-7xl text-foreground text-balance mb-6 font-light"
          />
        </div>

        <div className="reveal opacity-0 animation-delay-200 grid lg:grid-cols-2 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-8 lg:p-10 border border-border/50 hover:border-border transition-all duration-500"
            >
              {/* Large metric display */}
              <div className="mb-8">
                <div className="font-serif text-5xl md:text-6xl font-light text-primary mb-2">{testimonial.metric}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-[0.1em] font-medium">
                  {testimonial.metricLabel}
                </div>
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-lg md:text-xl text-foreground leading-relaxed mb-8 border-l-2 border-primary pl-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div>
                <div className="font-medium text-foreground">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
