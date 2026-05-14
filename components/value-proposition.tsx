import {
  Rocket,
  Users,
  Tag,
  Cog,
  ShieldCheck,
  MapPinned,
  type LucideIcon,
} from "lucide-react"

interface ValueCardProps {
  icon: LucideIcon
  title: string
  description: string
}

const values: ValueCardProps[] = [
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Show up and deliver on time, every time. Mining cannot afford delays.",
  },
  {
    icon: Users,
    title: "Skilled Team",
    description: "Engineers, geologists, operators — mining from the ground up.",
  },
  {
    icon: Tag,
    title: "Affordable Pricing",
    description: "Premium quality without the premium price tag. Maximum value.",
  },
  {
    icon: Cog,
    title: "Reliable Equipment",
    description: "Machinery you can count on, minimising costly downtime.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Focused",
    description: "Safety is our culture — full HSE compliance beyond checkbox.",
  },
  {
    icon: MapPinned,
    title: "Local Knowledge",
    description: "We know the terrain, regulations and people. True local advantage.",
  },
]

function ValueCard({ icon: Icon, title, description }: ValueCardProps) {
  return (
    <div className="group rounded-xl border-l-4 border-primary bg-card p-6 shadow-sm card-hover">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-bold text-foreground">{title}</h3>
      <p className="mt-2 leading-relaxed text-muted-foreground">{description}</p>
    </div>
  )
}

export function ValueProposition() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="font-semibold uppercase tracking-wider text-primary">
            Why we stand out
          </span>
          <h2 className="mt-3 text-3xl font-bold text-secondary md:text-4xl lg:text-5xl">
            Our Value Proposition
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Fast, reliable and affordable mining solutions backed by a skilled
            local team that puts safety first.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <ValueCard key={value.title} {...value} />
          ))}
        </div>
      </div>
    </section>
  )
}
