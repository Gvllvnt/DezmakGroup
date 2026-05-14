"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#commodities", label: "Commodities" },
  { href: "#contact", label: "Contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({ top: offsetTop, behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 bg-card/95 backdrop-blur-md transition-all duration-300",
        scrolled && "shadow-lg"
      )}
    >
      <div className="flex items-center justify-between px-4 py-2 md:px-6 lg:px-8">
        {/* Logo */}
        <a href="#home" onClick={(e) => handleLinkClick(e, "#home")} className="-ml-2 flex items-center">
          <Image
            src="/logo.jpeg"
            alt="DezMak Group"
            width={280}
            height={84}
            className="h-16 w-auto md:h-20 lg:h-24"
            priority
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 font-medium md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="relative text-foreground transition-colors hover:text-primary after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#why-us"
            onClick={(e) => handleLinkClick(e, "#why-us")}
            className="rounded-full bg-secondary px-6 py-2.5 text-sm font-semibold text-secondary-foreground shadow-md transition-all hover:scale-105 hover:bg-primary hover:text-primary-foreground"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-secondary transition-colors hover:bg-muted md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={cn(
          "overflow-hidden border-t border-border bg-card transition-all duration-300 ease-in-out md:hidden",
          isOpen ? "max-h-[400px] pb-6" : "max-h-0"
        )}
      >
        <div className="flex flex-col gap-1 px-5 pt-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="rounded-lg py-3 pl-4 text-lg text-foreground transition-colors hover:bg-muted hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#why-us"
            onClick={(e) => handleLinkClick(e, "#why-us")}
            className="mt-4 rounded-full bg-secondary py-3 text-center font-semibold text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Partner with us
          </a>
        </div>
      </div>
    </nav>
  )
}
