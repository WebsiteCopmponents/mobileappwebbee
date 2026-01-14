"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-btn";

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="z-50 px-6 py-2 bg-white">
      <nav className="max-w-7xl mx-auto ">
        <div className="flex items-center justify-between h-16 md:h-20 md:px-4 px-0 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10 md:w-16 md:h-16">
               <Image 
                 src="/favicon.png" 
                 alt="Webbeesolutions Logo" 
                 fill 
                 className="object-contain"
               />
            </div>
            
          </Link>

          <div className="hidden md:flex items-center gap-10">
            <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Services
            </Link>
            <Link href="#designs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Designs
            </Link>
            <Link href="#temoignages" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <InteractiveHoverButton text="Get Started" />
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <line x1="4" x2="20" y1="9" y2="9" />
                <line x1="4" x2="20" y1="15" y2="15" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 px-6 lg:px-8 border-t border-border/50">
            <div className="flex flex-col gap-4">
              <Link
                href="#services"
                className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#designs"
                className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Designs
              </Link>
              <Link
                href="#temoignages"
                className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
               <InteractiveHoverButton text="Get Started" />
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
