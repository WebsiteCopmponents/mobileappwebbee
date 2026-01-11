"use client"

import { Button } from "@/components/ui/button"
import { AnimatedText } from "@/components/animated-text"

export function PricingSection() {
  return (
    <section className="py-32 bg-[var(--surface-secondary)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
              <AnimatedText text="Pricing" />
        </div>
    
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">

          {/* Landing Page */}
          <div className="rounded-[var(--radius-card)] bg-white border border-[var(--border-subtle)] p-8 shadow-[var(--shadow-card)] flex flex-col">
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Basic Mobile App</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Ideal for startups looking to validate an idea with a functional MVP mobile app.
              </p>
            </div>

            <div className="mb-6">
              <span className="text-3xl font-semibold">$1999+</span>
              <span className="text-sm text-[var(--text-secondary)] ml-2">Fixed</span>
            </div>

            <ul className="space-y-4 text-sm text-[var(--text-secondary)] mb-8">
              <li>Small size</li>
              <li>Basic app flows & UI screens</li>
              <li>10–14 day turnaround</li>
              <li>1 Api</li>
              <li>Basic UI/UX</li>
              <li>Basic Backend</li>
              <li>Basic Security</li>
              <li>Basic Testing</li>
              <li>50/50 secure payment</li>
            </ul>

            <Button className="mt-auto rounded-full py-6">Get Started Now</Button>
          </div>

          {/* Partnership */}
          <div className="rounded-[var(--radius-card)] bg-white border border-[var(--border-subtle)] p-8 shadow-[var(--shadow-card)] flex flex-col relative">
            <span className="absolute top-6 right-6 text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
              Popular
            </span>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Standard Mobile App</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Tailored for businesses with ongoing design & marketing needs to scale your business.
              </p>
            </div>

            <div className="mb-6">
              <span className="text-3xl font-semibold">$3999+</span>
              <span className="text-sm text-[var(--text-secondary)] ml-2">Fixed</span>
            </div>

            <ul className="space-y-4 text-sm text-[var(--text-secondary)] mb-8">
              <li>Medium size</li>
              <li>Standard app flows & UI screens</li>
              <li>10–14 day turnaround</li>
              <li>Unlimited Api</li>
              <li>Premium UI/UX</li>
              <li>Premium Security</li>
              <li>Premium Testing</li>
              <li>50/50 secure payment</li>
            </ul>

            <Button className="mt-auto rounded-full py-6">Get Started Now</Button>
          </div>

          {/* Custom */}
          <div className="rounded-[var(--radius-card)] bg-[var(--surface-dark)] p-8 flex flex-col text-white shadow-[var(--shadow-card)]">
            <div className="mb-6">
              <span className="text-xs text-white/70">Limited availability</span>
              <h3 className="text-lg font-medium mt-2 mb-2">Custom</h3>
              <p className="text-sm text-white/70">
                Tailored digital experiences built for unique business needs.
              </p>
            </div>

            <div className="mb-6">
              <span className="text-3xl font-semibold">Starts at $9999+</span>
            </div>

            <ul className="space-y-4 text-sm text-white/80 mb-8">
              <li>Large size</li>
              <li>End-to-End Backend & App Development</li>
              <li>10–14 day turnaround</li>
              <li>Unlimited Api</li>
              <li>Premium UI/UX</li>
              <li>Premium Security</li>
              <li>Premium Testing</li>
              <li>50/50 secure payment</li>
            </ul>

            <Button className="mt-auto rounded-full bg-white text-black hover:bg-white/90 py-6">
              Request Quote
            </Button>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Testimonial */}
          <div className="rounded-[var(--radius-card)] bg-white border border-[var(--border-subtle)] p-8 shadow-[var(--shadow-card)]">
            <h4 className="text-lg font-medium mb-3">
              Increased conversion rate by 400%
            </h4>
            <p className="text-sm text-[var(--text-secondary)] mb-6">
              “We needed a high-converting website, and Bravio delivered. Their expertise helped us increase conversion rate by 400%”
            </p>

            <p className="text-sm font-medium">
              William Ashford
              <span className="block text-xs text-[var(--text-secondary)]">
                Co-Founder, Asterisk Inc
              </span>
            </p>
          </div>

          {/* CTA */}
          <div className="rounded-[var(--radius-card)] bg-[var(--surface-dark)] p-8 text-white flex flex-col justify-between">
            <div>
              <h4 className="text-xl font-medium mb-3">
                Can’t decide? Let’s talk
              </h4>
              <p className="text-sm text-white/70 max-w-md">
                Strategic web design, SEO-driven content, and paid ad campaigns tailored to drive result and conversions.
              </p>
            </div>

            <Button className="mt-8 rounded-full bg-white text-black hover:bg-white/90 w-fit py-6 px-6">
              Book a call →
            </Button>
          </div>
        </div>

      </div>
    </section>
  )
}
