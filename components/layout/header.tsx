"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Mail } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Franchise", href: "/franchise" },
    { name: "Contact", href: "/contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="bg-white shadow-sm border-b">
      {/* Top Bar */}
      <div className="bg-[#1E62A2] text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+91 9173636128</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>alexaindia121@gmail.com</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>ISO 9001:2015 Certified | WHO-GMP Compliant</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative">
              <Image
                src="/logo-full.png"
                alt="Alexa Biopharma"
                width={200}
                height={80}
                className="h-12 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-[#1E62A2] border-b-2 border-[#1E62A2] pb-1"
                    : "text-gray-700 hover:text-[#1E62A2]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-[#1E62A2] hover:bg-[#1E62A2]/90">
              <Link href="/franchise">Get Franchise</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-4 mt-8">
                <div className="mb-6">
                  <Image
                    src="/logo-full.png"
                    alt="Alexa Biopharma"
                    width={150}
                    height={60}
                    className="h-10 w-auto object-contain"
                  />
                </div>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-lg font-medium transition-colors ${
                      isActive(item.href) ? "text-[#1E62A2] font-bold" : "text-gray-700 hover:text-[#1E62A2]"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button asChild className="bg-[#1E62A2] hover:bg-[#1E62A2]/90 mt-4">
                  <Link href="/franchise" onClick={() => setIsOpen(false)}>
                    Get Franchise
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
