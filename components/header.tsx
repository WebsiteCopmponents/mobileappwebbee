"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="z-50 px-6 py-2 bg-white">
      <nav className="max-w-7xl mx-auto bg-background/80 backdrop-blur-md border border-border/50 rounded-3xl ">
        <div className="flex items-center justify-between h-20 px-6 lg:px-8">
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
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6">
              Get Started
            </Button> 
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full w-full mt-4 py-6">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
