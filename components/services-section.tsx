import {
  Globe,
  HardHat,
  Truck,
  Users,
  Package,
  FlaskConical,
  TrendingUp,
  Award,
  type LucideIcon,
} from "lucide-react"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  items: string[]
}

const services: ServiceCardProps[] = [
  {
    icon: Globe,
    title: "Exploration & Geology",
    items: ["Geological surveys & mapping", "Exploration drilling", "Mine planning & feasibility"],
  },
  {
    icon: HardHat,
    title: "Mining Operations",
    items: ["Drilling & blasting", "Earthmoving & excavation", "Rehabilitation & closure"],
  },
  {
    icon: Truck,
    title: "Equipment & Tech",
    items: ["Heavy machinery supply", "Conveyors & crushers", "Automation & remote monitoring"],
  },
  {
    icon: Users,
    title: "Labour & Expertise",
    items: ["Mining engineers & geologists", "Equipment operators", "Safety officers & project managers"],
  },
  {
    icon: Package,
    title: "Logistics & Supply",
    items: ["Fuel & lubricants supply", "Explosives handling", "Camp management & water solutions"],
  },
  {
    icon: FlaskConical,
    title: "Processing & Refining",
    items: ["Crushing & separation", "Smelting & refining", "Tailings management"],
  },
  {
    icon: TrendingUp,
    title: "Financial & Business",
    items: ["Mine financing advisory", "Insurance & risk management", "M&A & due diligence"],
  },
  {
    icon: Award,
    title: "Training & Compliance",
    items: ["Safety certification", "Regulatory compliance", "Environmental reporting"],
  },
]

function ServiceCard({ icon: Icon, title, items }: ServiceCardProps) {
  return (
    <div className="group rounded-xl bg-card p-6 shadow-sm card-hover">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg blue-gradient shadow-sm transition-transform group-hover:scale-110">
        <Icon className="h-5 w-5 text-primary-foreground" />
      </div>
      <h3 className="mb-3 text-xl font-bold text-foreground">{title}</h3>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ServicesSection() {
  return (
    <section id="services" className="bg-background py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="font-semibold uppercase tracking-wider text-primary">
            Full value chain
          </span>
          <h2 className="mt-3 text-3xl font-bold text-secondary md:text-4xl lg:text-5xl">
            Our Integrated Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            From exploration to closure — DezMak Group delivers end-to-end
            mining solutions.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
