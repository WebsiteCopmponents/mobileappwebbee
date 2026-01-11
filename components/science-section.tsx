"use client"
import { useEffect, useRef } from "react"
import { ScrollBlurText } from "./scroll-blur-text"
import { Star } from "lucide-react"

const testimonialData = [
  {
    metric: "3×",
    metricLabel: "Faster MVP launch",
    quote:
      "We came in with a rough app idea and needed an MVP fast. The team helped us refine the flows, design the app, and get to development-ready screens quickly. Clear communication and solid execution.",
    author: "David Callahan",
    role: "Founder",
    company: "Early-stage Startup",
  },
  {
    metric: "40%",
    metricLabel: "Increase in user engagement",
    quote:
      "Our existing mobile app had usability issues. After the redesign, onboarding became much smoother and engagement improved significantly. The team clearly understands mobile UX.",
    author: "Sarah Mitchell",
    role: "Product Manager",
    company: "SaaS Startup",
  },
  {
    metric: "2×",
    metricLabel: "Improvement in retention",
    quote:
      "They helped us redesign our MVP into a production-ready mobile app. The UI system was clean, scalable, and easy for developers to implement.",
    author: "Tom Becker",
    role: "Co-Founder",
    company: "Mobile Product Company",
  },
  {
    metric: "6 weeks",
    metricLabel: "From idea to launch",
    quote:
      "We needed a reliable team to design our mobile app from scratch. From user flows to final UI, everything was well thought out and delivered on time.",
    author: "Danielle Reyes",
    role: "Founder",
    company: "Startup",
  },
]


export function ScienceSection() {
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
    <section ref={sectionRef} id="testimonials" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <p className="reveal opacity-0 text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4">
            Testimonials
          </p>
          <ScrollBlurText
            text="Results that speaks volume"
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground text-balance mb-4 font-light"
          />
          <p className="reveal opacity-0 animation-delay-200 font-serif text-lg md:text-xl text-muted-foreground mb-6">
            Read success stories
          </p>
          <p className="reveal opacity-0 animation-delay-200 text-muted-foreground max-w-2xl mx-auto">
            Find out how our happy clients are raving about us.
          </p>
        </div>

        {/* Main Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {/* Left Column - Large Metric Card */}
          <div className="reveal opacity-0 animation-delay-200 bg-card rounded-2xl p-8 lg:p-10 border border-border/50 hover:border-primary/30 transition-all duration-500">
            <div className="mb-8">
              <div className="font-serif text-6xl md:text-7xl font-light text-primary mb-2">
                {testimonialData[0].metric}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-[0.1em] font-medium mb-6">
                {testimonialData[0].metricLabel}
              </div>
            </div>
            <blockquote className="text-sm md:text-base text-foreground leading-relaxed mb-8 opacity-80">
              <span className="text-2xl text-primary font-light">"</span>
              {testimonialData[0].quote}
              <span className="text-2xl text-primary font-light">"</span>
            </blockquote>
            <div>
              <div className="font-medium text-foreground text-sm">{testimonialData[0].author}</div>
              <div className="text-xs text-muted-foreground">{testimonialData[0].role}</div>
            </div>
          </div>

          {/* Right Column - Right Side Testimonials */}
          <div className="flex flex-col gap-6">
            {/* Top Right - Metric Card */}
            <div className="reveal opacity-0 animation-delay-300 bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500">
              <div className="mb-6">
                <div className="font-serif text-4xl md:text-5xl font-light text-primary mb-2">
                  {testimonialData[1].metric}
                </div>
                <div className="text-xs !text-white uppercase tracking-[0.1em] font-medium">
                  {testimonialData[1].metricLabel}
                </div>
              </div>
              <blockquote className="text-xs md:text-sm text-foreground leading-relaxed mb-6 opacity-80">
                <span className="text-xl text-primary font-light">"</span>
                {testimonialData[1].quote}
                <span className="text-xl text-primary font-light">"</span>
              </blockquote>
              <div>
                <div className="font-medium text-foreground text-xs">{testimonialData[1].author}</div>
                <div className="text-xs text-muted-foreground">{testimonialData[1].role}</div>
              </div>
            </div>

            {/* Bottom Right - Two Column Testimonials */}
            <div className="grid grid-cols-2 gap-6">
              <div className="reveal opacity-0 animation-delay-400 bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-500 bg-primary">
                <blockquote className="text-xs text-white leading-relaxed mb-4 opacity-80">
                  <span className="text-lg text-white font-light">"</span>
                  {testimonialData[2].quote}
                  <span className="text-lg text-white font-light">"</span>
                </blockquote>
                <div>
                  <div className="font-medium text-white text-xs">{testimonialData[2].author}</div>
                  <div className="text-xs text-white">{testimonialData[2].role}</div>
                </div>
              </div>

              <div className="reveal opacity-0 animation-delay-500 bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-500 bg-primary">
                <blockquote className="text-xs text-white leading-relaxed mb-4 opacity-80">
                  <span className="text-lg text-white font-light">"</span>
                  {testimonialData[3].quote}
                  <span className="text-lg text-white font-light">"</span>
                </blockquote>
                <div>
                  <div className="font-medium text-white text-xs">{testimonialData[3].author}</div>
                  <div className="text-xs text-white">{testimonialData[3].role}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Center Product Mockup with Bottom Stats */}
      
      </div>
    </section>
  )
}
