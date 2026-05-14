import { Target, Eye, Flag } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="bg-card py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left Column - About Text */}
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary">
              <Flag className="h-4 w-4" />
              About Us
            </span>
            <h2 className="mb-6 mt-3 text-3xl font-bold text-secondary md:text-4xl lg:text-5xl text-balance">
              DezMak Group (Pty) Ltd
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
              Founded in 2024 by{" "}
              <strong className="text-foreground">Desmond Makgalemele</strong>,
              DezMak Group is a proudly South African mining solutions company
              headquartered in Sandton, Johannesburg. We serve major mining
              companies, contractors, government entities, and private investors
              across the full mining value chain — from exploration to closure.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              With deep local knowledge, a highly skilled team, and unwavering
              commitment to safety, we deliver fast, reliable, and affordable
              services without compromise.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="border-l-4 border-primary pl-5">
                <span className="text-3xl font-black text-secondary md:text-4xl">100+</span>
                <p className="mt-1 text-muted-foreground">Projects readiness</p>
              </div>
              <div className="border-l-4 border-primary pl-5">
                <span className="text-3xl font-black text-secondary md:text-4xl">24/7</span>
                <p className="mt-1 text-muted-foreground">Operational support</p>
              </div>
            </div>
          </div>

          {/* Right Column - Mission & Vision */}
          <div className="rounded-2xl border border-border bg-muted p-8 shadow-sm lg:p-10">
            <div className="grid grid-cols-1 gap-8">
              <div className="flex gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary">Our Mission</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    To deliver fast, reliable and affordable mining solutions
                    across South Africa, driven by a skilled local team,
                    unwavering safety commitment and passion for excellence.
                  </p>
                </div>
              </div>
              <div className="h-px bg-border" />
              <div className="flex gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Eye className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary">Our Vision</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    To become Southern Africa&apos;s most trusted mining services
                    partner, known for integrity, innovation and lasting impact
                    in every project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
