import { HardHat, Phone, ArrowRight, CheckCircle, MapPin } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-secondary text-secondary-foreground hero-pattern">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-accent/80" />

      <div className="container relative z-10 mx-auto max-w-6xl px-6 py-24 text-center md:py-32 md:text-left">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/20 px-4 py-1.5 text-sm font-semibold text-primary backdrop-blur-sm">
              <HardHat className="h-4 w-4" />
              Proudly South African
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-balance md:text-5xl lg:text-6xl">
              Fast. <span className="text-primary">Reliable.</span> Safe. Local.
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-gray-200 md:text-xl">
              Mining solutions across the full value chain — with integrity, speed, and unmatched local expertise.
            </p>

            <div className="flex flex-col gap-4 pt-2 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 font-bold text-primary-foreground shadow-gold transition-all hover:scale-105 hover:bg-primary/90"
              >
                <Phone className="h-4 w-4" />
                Contact us
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-8 py-3.5 font-medium transition-all hover:border-white/70 hover:bg-white/10"
              >
                Our services
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 pt-4 text-sm text-gray-300 md:justify-start">
              <span className="inline-flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Reg: 2024/222772/07
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Sandton, JHB
              </span>
            </div>
          </div>

          {/* Right Column - Quote Card */}
          <div className="hidden md:block">
            <div className="rounded-2xl border border-white/20 bg-white/5 p-8 backdrop-blur-sm">
              <HardHat className="mb-4 h-16 w-16 text-primary/70" />
              <p className="text-lg italic leading-relaxed text-gray-200">
                &quot;We deliver results that go deeper — beyond extraction, towards lasting partnerships.&quot;
              </p>
              <p className="mt-4 font-semibold text-white">
                — Desmond Makgalemele, Founder
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
