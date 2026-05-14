import { Building2, HardHat, Landmark, PieChart, type LucideIcon } from "lucide-react"

interface ClientCardProps {
  icon: LucideIcon
  title: string
  description: string
}

const clients: ClientCardProps[] = [
  {
    icon: Building2,
    title: "Mining Companies",
    description: "Exploration, equipment, safety consulting & workforce supply.",
  },
  {
    icon: HardHat,
    title: "Contractors",
    description: "Subcontracting, equipment rental, technical staffing & consumables.",
  },
  {
    icon: Landmark,
    title: "Government Projects",
    description: "Environmental assessments, community development & mine closure.",
  },
  {
    icon: PieChart,
    title: "Private Sector",
    description: "JVs, mineral trading, offtake agreements & asset valuation.",
  },
]

function ClientCard({ icon: Icon, title, description }: ClientCardProps) {
  return (
    <div className="group rounded-2xl border border-border bg-muted p-8 text-center card-hover">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <h3 className="text-xl font-bold text-foreground">{title}</h3>
      <p className="mt-3 text-muted-foreground">{description}</p>
    </div>
  )
}

export function ClientsSection() {
  return (
    <section className="bg-card py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="font-bold uppercase tracking-wider text-primary">
            Partnerships
          </span>
          <h2 className="mt-3 text-3xl font-bold text-secondary md:text-4xl lg:text-5xl">
            Who We Serve
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {clients.map((client) => (
            <ClientCard key={client.title} {...client} />
          ))}
        </div>
      </div>
    </section>
  )
}
