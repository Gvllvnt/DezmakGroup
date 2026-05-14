import { Gem } from "lucide-react"

const commodities = [
  "Chrome",
  "Manganese",
  "Iron Ore",
  "Copper Ore",
  "Limestone",
  "Coal",
  "Platinum Group Metals",
]

export function CommoditiesSection() {
  return (
    <section id="commodities" className="bg-card py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 font-bold uppercase tracking-wider text-primary">
            <Gem className="h-4 w-4" />
            Mineral expertise
          </span>
          <h2 className="mt-3 text-3xl font-bold text-secondary md:text-4xl lg:text-5xl">
            Commodities we specialize in
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {commodities.map((commodity) => (
            <span
              key={commodity}
              className="rounded-full bg-secondary px-6 py-3 text-base font-semibold text-secondary-foreground shadow-sm transition-transform hover:scale-105"
            >
              {commodity}
            </span>
          ))}
          <span className="rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-105">
            And Many More
          </span>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-lg text-muted-foreground">
          Our commodity expertise is continuously growing across Southern Africa
          — we remain agile and ready for new minerals as market demands evolve.
        </p>
      </div>
    </section>
  )
}
