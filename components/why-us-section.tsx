import { CheckCircle, Quote, User } from "lucide-react"

const reasons = [
  "Registered SA company with full legal compliance",
  "Deep local knowledge — Gauteng & surrounding regions",
  "Comprehensive service: exploration through closure",
  "Dedicated safety culture (HSE industry standards)",
  "Commodity specialists in Chrome, Manganese, Iron Ore & more",
  "Competitive & transparent pricing, no hidden costs",
  "Agile, responsive, multidisciplinary team",
]

export function WhyUsSection() {
  return (
    <section id="why-us" className="bg-secondary py-20 text-secondary-foreground md:py-28">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Column - Reasons */}
          <div>
            <h2 className="mb-8 text-3xl font-bold md:text-4xl lg:text-5xl text-balance">
              Why choose <span className="text-primary">DezMak Group</span>
            </h2>
            <ul className="space-y-4">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-4 text-lg text-gray-200">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  {reason}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Quote */}
          <div className="rounded-2xl border border-white/20 bg-white/5 p-8 backdrop-blur-sm lg:p-10">
            <Quote className="mb-6 h-12 w-12 text-primary/70" />
            <p className="text-xl leading-relaxed lg:text-2xl">
              &quot;At DezMak Group, we do not simply provide services — we
              build lasting partnerships. Every client, every project and every
              mineral we handle carries our name. We show up, we deliver and we
              do it right.&quot;
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full blue-gradient shadow-blue">
                <User className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <p className="text-lg font-bold">Desmond Makgalemele</p>
                <p className="text-gray-300">
                  Founder & Director, DezMak Group
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
