"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import { ScrollBlurText } from "@/components/scroll-blur-text"

const projects = [
  {
    title: "FitFlow",
    tags: ["Health & Fitness", "iOS & Android"],
    image: "/images/project-fitflow.jpg",
  },
  {
    title: "ShopHub",
    tags: ["E-commerce", "Web App"],
    image: "/images/project-shophub.jpg",
  },
  {
    title: "MindWell",
    tags: ["Wellness", "Cross-Platform"],
    image: "/images/project-mindwell.jpg",
  },
  {
    title: "DevSync",
    tags: ["Project Management", "Collaboration"],
    image: "/images/project-devsync.jpg",
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
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`reveal opacity-0 group cursor-pointer ${
                index === 1
                  ? "animation-delay-200"
                  : index === 2
                    ? "animation-delay-400"
                    : index === 3
                      ? "animation-delay-600"
                      : ""
              }`}
            >
              <div className="bg-muted rounded-3xl overflow-hidden mb-6 h-72 md:h-80 border border-border/50 group-hover:border-primary/30 transition-all duration-500">
                <img
                  src={project.image || "/placeholder.svg?height=320&width=640&query=mobile app ui screenshot"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="bg-white rounded-2xl p-6 border border-border/50 group-hover:border-primary/30 group-hover:shadow-xl transition-all duration-500">
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4 font-light group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="text-primary hover:text-primary/80 transition-colors p-0 h-auto flex items-center gap-2 group/btn">
                  View project
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
