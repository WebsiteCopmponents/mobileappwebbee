"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import { ScrollBlurText } from "@/components/scroll-blur-text"

const projects = [
  {
    title: "FitFlow",
    subtitle: "Health & Fitness",
    tags: ["Health & Fitness", "iOS & Android"],
    image: "/images/project-fitflow.jpg",
    icon: "/icons/fitflow-icon.png",
  },
  {
    title: "ShopHub",
    subtitle: "E-commerce App",
    tags: ["E-commerce", "Web App"],
    image: "/images/project-shophub.jpg",
    icon: "/icons/shophub-icon.png",
  },
  {
    title: "MindWell",
    subtitle: "Mental Wellness",
    tags: ["Wellness", "Cross-Platform"],
    image: "/images/project-mindwell.jpg",
    icon: "/icons/mindwell-icon.png",
  },
  {
    title: "DevSync",
    subtitle: "Project Management",
    tags: ["Project Management", "Collaboration"],
    image: "/images/project-devsync.jpg",
    icon: "/icons/devsync-icon.png",
  },
]

export function WorksSection() {
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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20 lg:mb-24 flex flex-col lg:flex-row lg:items-end lg:justify-between">
          <div className="flex-1">
            <p className="reveal opacity-0 text-sm uppercase tracking-[0.2em] text-secondary font-medium mb-4">
              Our Works
            </p>
            <ScrollBlurText
              text="How we've helped other businesses."
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground text-balance mb-6 font-light"
            />
            <p className="reveal opacity-0 animation-delay-400 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              See how we've helped clients turn ambitious ideas into impactful mobile applications.
            </p>
          </div>
          <a
            href="#all-projects"
            className="reveal opacity-0 animation-delay-400 mt-8 lg:mt-0 flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            View all projects
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Projects Grid */}
        {/* App Showcase Rail */}
<div
        className="
          grid
          grid-flow-col
          auto-cols-[80%]
          gap-6
          overflow-x-auto
          pb-4
          scrollbar-hide

          sm:auto-cols-[55%]
          md:grid-flow-row
          md:auto-cols-auto
          md:grid-cols-2
          lg:grid-cols-3
          md:overflow-visible
        "
      >
        {projects.map((project) => (
          <div key={project.title} className="group cursor-pointer">
            {/* Card */}
            <div className="bg-[#F4F4F4] rounded-4xl p-6 transition-all duration-300 group-hover:shadow-xl">
              <div className="relative aspect-[6/8] rounded-2xl overflow-hidden bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </div>

            {/* Meta */}
            <div className="mt-4 flex items-center gap-3 pl-3">
             
              <div className="leading-tight">
                <p className="font-medium text-foreground">
                  {project.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {project.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      </div>
    </section>
  )
}
