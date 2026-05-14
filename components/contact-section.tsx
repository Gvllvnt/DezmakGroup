import { Mail, Phone, MapPin, Globe, HardHat, ArrowRight } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@dezmakgroup.co.za",
    href: "mailto:info@dezmakgroup.co.za",
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "073 691 1463",
    href: "tel:0736911463",
  },
  {
    icon: MapPin,
    label: "Head Office",
    value: "Sandton, Johannesburg, Gauteng 2191, South Africa",
    href: null,
  },
  {
    icon: Globe,
    label: "Website",
    value: "dezmakgroup.vercel.app",
    href: "dezmakgroup.vercel.app",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="bg-card py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <span className="font-bold uppercase text-primary">
            Connect with us
          </span>
          <h2 className="mt-3 text-3xl font-bold text-secondary md:text-4xl lg:text-5xl">
            {"Let's work together"}
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Info Card */}
          <div className="rounded-2xl bg-muted p-8 shadow-sm lg:p-10">
            <h3 className="mb-8 text-2xl font-bold text-secondary">
              Reach out directly
            </h3>
            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full blue-gradient shadow-sm">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="break-all text-primary transition-colors hover:text-primary/80 hover:underline"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 border-t border-border pt-6">
              <p className="text-sm text-muted-foreground">
                Registration: 2024/222772/07 | B-BBEE committed
              </p>
            </div>
          </div>

          {/* CTA Card */}
          <div className="flex flex-col justify-center rounded-2xl bg-secondary p-8 text-secondary-foreground lg:p-10">
            <HardHat className="mb-6 h-16 w-16 text-primary" />
            <h4 className="text-2xl font-bold lg:text-3xl">
              Fast, reliable & local mining partner
            </h4>
            <p className="mt-4 text-lg leading-relaxed text-gray-300">
              Whether you need geological surveying, full-scale mining
              operations, logistics or safety solutions — DezMak Group delivers
              excellence across the mining value chain.
            </p>
            <a
              href="mailto:info@dezmakgroup.co.za"
              className="mt-8 inline-flex items-center gap-2 self-start rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-blue transition-all hover:scale-105 hover:bg-primary/90"
            >
              Request a Quote
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
