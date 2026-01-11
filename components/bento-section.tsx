"use client"

import { Button } from "@/components/ui/button"

export function BentoSection() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <span className="text-sm font-medium text-primary">
            Our Services
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-serif font-light leading-tight text-[var(--text-primary)]">
            From ideas into high-impact solutions
            <br />
            <span className="text-[var(--text-secondary)]">
              That inspires and convert
            </span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-6">

          {/* Web & Mobile Apps */}
          <div className="col-span-12 lg:col-span-5 rounded-[var(--radius-card)] bg-[var(--surface-secondary)] border border-[var(--border-subtle)] p-8 shadow-[var(--shadow-card)] flex flex-col">
            <h3 className="text-lg font-medium mb-3">
              Web & mobile apps
            </h3>

            <p className="text-sm text-[var(--text-secondary)] mb-8 max-w-sm">
              We design and develop high-performing web and mobile
              applications that are intuitive, scalable, and visually
              compelling.
            </p>

            <img
              src="/images/phone.png"
              alt=""
              className="mt-auto mx-auto max-h-[420px]"
            />
          </div>

          {/* No-code Websites */}
          <div className="col-span-12 lg:col-span-7 rounded-[var(--radius-card)] bg-[var(--surface-primary)] border border-[var(--border-subtle)] p-8 shadow-[var(--shadow-card)]">
            <h3 className="text-lg font-medium mb-3">
              No-code websites
            </h3>

            <p className="text-sm text-[var(--text-secondary)] mb-6 max-w-xl">
              Launch faster with powerful, fully customizable websites
              built with Webflow and Framer that are easy to manage and
              optimized for conversion.
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "Design",
                "User Research",
                "Branding",
                "Development",
                "UI/UX Design",
                "Copywriting & Storytelling",
                "SEO Optimization",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--border-subtle)] px-3 py-1 text-xs text-[var(--text-secondary)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Motion Design */}
          <div className="col-span-12 lg:col-span-7 rounded-[var(--radius-card)] bg-[var(--surface-primary)] border border-[var(--border-subtle)] p-8 shadow-[var(--shadow-card)]">
            <h3 className="text-lg font-medium mb-3">
              Motion design & animation
            </h3>

            <p className="text-sm text-[var(--text-secondary)] mb-6 max-w-md">
              Bring your brand to life with smooth, engaging motion
              design that boosts engagement.
            </p>

            <Button
              variant="outline"
              size="sm"
              className="rounded-full"
            >
              Book a call →
            </Button>
          </div>

          {/* MVP Design */}
          <div className="col-span-12 lg:col-span-7 rounded-[var(--surface-primary)] rounded-[var(--radius-card)] border border-[var(--border-subtle)] p-8 shadow-[var(--shadow-card)]">
            <h3 className="text-lg font-medium mb-3">
              MVP design & development
            </h3>

            <p className="text-sm text-[var(--text-secondary)] max-w-xl">
              Validate your idea with a fast, functional, and beautifully
              designed MVP. Built for rapid prototyping, lean development,
              and scalable design systems.
            </p>
          </div>

          {/* Dark CTA */}
          <div className="col-span-12 lg:col-span-5 rounded-[var(--radius-card)] bg-[var(--surface-dark)] p-8 flex flex-col justify-between">
            <h3 className="text-xl font-medium text-white leading-snug">
              World-class Design,
              <br />
              Data-Driven Marketing,
              <br />
              Unstoppable Growth
            </h3>

            <Button
              size="sm"
              className="mt-8 rounded-full bg-white text-black hover:bg-white/90 w-fit"
            >
              Book a call →
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}
