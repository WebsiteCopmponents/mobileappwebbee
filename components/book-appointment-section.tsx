"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { ScrollBlurText } from "@/components/scroll-blur-text"

const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"]

export function BookAppointmentSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  })

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

  const checkScroll = () => {
    if (scrollRef.current) {
      setCanScrollLeft(scrollRef.current.scrollLeft > 0)
      setCanScrollRight(
        scrollRef.current.scrollLeft < scrollRef.current.scrollWidth - scrollRef.current.clientWidth - 10,
      )
    }
  }

  useEffect(() => {
    checkScroll()
    scrollRef.current?.addEventListener("scroll", checkScroll)
    return () => scrollRef.current?.removeEventListener("scroll", checkScroll)
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 200
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleTimeSelect = (time: string) => {
    setFormData((prev) => ({ ...prev, time }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Appointment booked:", formData)
  }

  return (
    <section ref={sectionRef} id="contact" className="py-24 lg:py-32 px-6">
      <div className="relative max-w-7xl mx-auto rounded-[48px] overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/5" />

        <div className="relative px-6 lg:px-12 py-16 lg:py-24">
          <div className="text-center mb-16 lg:mb-20">
            <p className="reveal opacity-0 text-sm uppercase tracking-[0.2em] text-secondary font-medium mb-4">
              Free Consultation
            </p>
            <ScrollBlurText
              text="Let’s plan your mobile app"
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground text-balance mb-6"
            />
            <p className="reveal opacity-0 animation-delay-400 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Talk directly with our mobile app team about your MVP or full-scale application. We’ll review your idea, scope the build, and outline next steps.

            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left side - Info */}
            <div className="reveal opacity-0 animation-delay-200 space-y-8">
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-medium text-foreground">Why talk to us?</h3>
                <ul className="space-y-3 text-muted-foreground leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Work directly with experienced mobile app developers  </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Honest feedback on your MVP or app idea</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Clear scope, timeline, and technical direction  </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>No sales pressure — just practical guidance</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8 border-t border-border/50">
                <h4 className="font-serif text-lg font-medium text-foreground mb-4">Contact details</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  Email:{" "}
                  <a
                    href="mailto:hello@webbeesolutions.com"
                    className="text-foreground hover:underline"
                  >
                    hello@webbeesolutions.com
                  </a>
                </p>
              
                <p>
                  Phone:{" "}
                  <a
                    href="tel:+917569753062"
                    className="text-foreground hover:underline"
                  >
                    +91 75697 53062
                  </a>
                </p>
              
                <p>
                  Location:{" "}
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Hyderabad,India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:underline"
                  >
                    Hyderabad, India
                  </a>
                </p>
              </div>

              </div>
            </div>

            {/* Right side - Form */}
            <div className="reveal opacity-0 animation-delay-400">
            <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-full">
               {/* Name + Email */}
               <div className="flex flex-col gap-4">
                 <input
                   type="text"
                   name="name"
                   placeholder="Your name"
                   value={formData.name}
                   onChange={handleInputChange}
                   required
                   className="w-full px-4 py-3 rounded-xl border border-border/50 bg-card/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                 />
             
                 <input
                   type="email"
                   name="email"
                   placeholder="Email"
                   value={formData.email}
                   onChange={handleInputChange}
                   required
                   className="w-full px-4 py-3 rounded-xl border border-border/50 bg-card/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                 />
               </div>
             
               {/* Phone */}
               <input
                 type="tel"
                 name="phone"
                 placeholder="Phone number"
                 value={formData.phone}
                 onChange={handleInputChange}
                 required
                 className="w-full px-4 py-3 rounded-xl border border-border/50 bg-card/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
               />
               {/* Submit */}
               <button
                 type="submit"
                 className="w-full rounded-full bg-primary text-primary-foreground py-4 text-sm font-medium hover:bg-primary/90 transition flex items-center justify-center gap-2"
               >
                 Book Free Consultation →
               </button>
             
               <p className="text-xs text-muted-foreground text-center">
                 We'll confirm your appointment via email within 24 hours
               </p>
             </form>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
