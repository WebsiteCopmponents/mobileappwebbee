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

          {/* Starter MVP */}
          <div className="rounded-[var(--radius-card)] bg-white border border-[var(--border-subtle)] p-8 shadow-[var(--shadow-card)] flex flex-col">
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Starter MVP</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Best for founders who want to validate an idea with a functional MVP mobile app.
              </p>
            </div>

            <div className="mb-6">
              <span className="text-3xl font-semibold">$3,000 – $5,000</span>
              <span className="text-sm text-[var(--text-secondary)] ml-2">Fixed</span>
            </div>

            <ul className="space-y-4 text-sm text-[var(--text-secondary)] mb-8">
              <li>• Core app flows & screens</li>
              <li>• iOS or Android MVP</li>
              <li>• 4–6 week delivery</li>
              <li>• Basic backend integration</li>
              <li>• Clean, scalable UI/UX</li>
              <li>• Developer-ready handoff or build</li>
              <li>• Weekly progress updates</li>
              <li>• 50/50 secure payment</li>
            </ul>

            <Button className="mt-auto rounded-full py-6">
              Start MVP
            </Button>
          </div>

          {/* Growth MVP */}
          <div className="rounded-[var(--radius-card)] bg-white border border-[var(--border-subtle)] p-8 shadow-[var(--shadow-card)] flex flex-col relative">
            <span className="absolute top-6 right-6 text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
              Popular
            </span>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Growth MVP</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Ideal for startups ready to launch a complete, store-ready MVP.
              </p>
            </div>

            <div className="mb-6">
              <span className="text-3xl font-semibold">$6,000 – $9,000</span>
              <span className="text-sm text-[var(--text-secondary)] ml-2">Fixed</span>
            </div>

            <ul className="space-y-4 text-sm text-[var(--text-secondary)] mb-8">
              <li>• Full MVP mobile app</li>
              <li>• Authentication & core backend</li>
              <li>• API integrations</li>
              <li>• iOS & Android support</li>
              <li>• Scalable UI system</li>
              <li>• App Store / Play Store ready</li>
              <li>• Ongoing iteration & support</li>
              <li>• 50/50 secure payment</li>
            </ul>

            <Button className="mt-auto rounded-full py-6">
              Build my MVP
            </Button>
          </div>

          {/* Custom App */}
          <div className="rounded-[var(--radius-card)] bg-[var(--surface-dark)] p-8 flex flex-col text-white shadow-[var(--shadow-card)]">
            <div className="mb-6">
              <span className="text-xs text-white/70">Limited availability</span>
              <h3 className="text-lg font-medium mt-2 mb-2">Custom Mobile App</h3>
              <p className="text-sm text-white/70">
                End-to-end mobile app development for complex or funded products.
              </p>
            </div>

            <div className="mb-6">
              <span className="text-3xl font-semibold">Starts at $10,000+</span>
            </div>

            <ul className="space-y-4 text-sm text-white/80 mb-8">
              <li>• Dedicated senior mobile team</li>
              <li>• Custom architecture & backend</li>
              <li>• Advanced features & integrations</li>
              <li>• iOS & Android apps</li>
              <li>• Performance & security focused</li>
              <li>• Long-term scalability planning</li>
              <li>• Priority communication</li>
              <li>• 50/50 secure payment</li>
            </ul>

            <Button className="mt-auto rounded-full bg-white text-black hover:bg-white/90 py-6">
              Request estimate
            </Button>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Testimonial */}
          <div className="rounded-[var(--radius-card)] bg-white border border-[var(--border-subtle)] p-8 shadow-[var(--shadow-card)]">
            <h4 className="text-lg font-medium mb-3">
              MVP launched in weeks
            </h4>
            <p className="text-sm text-[var(--text-secondary)] mb-6">
              “They helped us turn our idea into a production-ready mobile app. Clear communication, fast execution, and strong mobile UX.”
            </p>

            <p className="text-sm font-medium">
              Founder
              <span className="block text-xs text-[var(--text-secondary)]">
                Startup company
              </span>
            </p>
          </div>

          {/* CTA */}
          <div className="rounded-[var(--radius-card)] bg-[var(--surface-dark)] p-8 text-white flex flex-col justify-between">
            <div>
              <h4 className="text-xl font-medium mb-3">
                Not sure which plan fits?
              </h4>
              <p className="text-sm text-white/70 max-w-md">
                Let’s discuss your app idea, timeline, and goals — and decide the best approach together.
              </p>
            </div>

            <Button className="mt-8 rounded-full bg-white text-black hover:bg-white/90 w-fit py-6 px-6">
              Book a free call →
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
