import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-secondary py-12 text-gray-300">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/dezmak-group-logo-footer.png"
              alt="DezMak Group"
              width={280}
              height={84}
              className="h-24 w-auto md:h-28 lg:h-32"
            />
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} All rights reserved. Confidentiality applies.
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm md:gap-4">
            <a href="mailto:info@dezmakgroup.co.za" className="transition-colors hover:text-primary">
              info@dezmakgroup.co.za
            </a>
            <span className="hidden text-gray-600 md:inline">|</span>
            <a href="tel:0736911463" className="transition-colors hover:text-primary">
              073 691 1463
            </a>
          </div>
        </div>

        {/* Tagline */}
        <div className="mt-8 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &quot;Your trusted mining partner — delivering results that go deeper.&quot;
          </p>
          <p className="mt-2 text-xs text-gray-500">
            Reg No: 2024/222772/07
          </p>
        </div>
      </div>
    </footer>
  )
}
