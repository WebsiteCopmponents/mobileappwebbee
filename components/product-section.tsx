"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ScrollBlurText } from "@/components/scroll-blur-text"

const services = [
  {
    number: "01",
    name: "Mobile App Development",
    image: "/mobileappdevelopment.png",
    description: "Native and cross-platform development with modern tech stack",
  },
  {
    number: "02",
    name: "Mobile App UI/UX",
    image: "/uiuxservices.jpg",
    description: "Beautiful, intuitive interfaces designed for user engagement",
  },
  {
    number: "03",
    name: "Mobile App Maintenance",
    image: "/with-applications.jpg",
    description: "Ongoing support, updates, and performance optimization",
  },
]

export function ProductSection() {
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
    <section ref={sectionRef} id="services" className="py-24 lg:py-32 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20 lg:mb-24">
          <p className="reveal opacity-0 text-sm uppercase tracking-[0.2em] text-secondary font-medium mb-4">
            Our Solutions
          </p>
          <ScrollBlurText
            text="Services built for growth"
            className="font-serif text-4xl md:text-5xl lg:text-7xl text-foreground text-balance mb-6 font-light"
          />
          <p className="reveal opacity-0 animation-delay-400 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Comprehensive mobile app services from concept to deployment and beyond.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={service.name}
              className={`reveal opacity-0 ${index === 1 ? "animation-delay-200" : index === 2 ? "animation-delay-400" : ""} group`}
            >
              <div className="flex flex-col h-full">
                <div className="mb-8">
                  <span className="text-7xl md:text-8xl font-serif font-light text-primary/15 group-hover:text-primary/30 transition-colors duration-500">
                    {service.number}
                  </span>
                </div>

                <div className="bg-muted rounded-3xl overflow-hidden mb-8 h-56 md:h-64 border border-border/50 group-hover:border-border transition-colors duration-500">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3 font-light">{service.name}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow text-base">{service.description}</p>

                <Button
                  variant="ghost"
                  className="text-primary hover:text-primary hover:bg-primary/10 px-8 py-2 rounded-full h-auto group/btn w-fit"
                >
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
