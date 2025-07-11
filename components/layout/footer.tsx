import Link from "next/link"
import { Phone, Mail, MapPin, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1E62A2] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-['Poppins']">Alexa Biopharma</h3>
            <p className="text-white/80 mb-4">
              A trusted name in Indian pharmaceuticals, committed to providing high-quality, affordable healthcare
              solutions.
            </p>
            <div className="flex space-x-2">
              <div className="bg-white/20 rounded px-3 py-1 text-sm">ISO 9001:2015</div>
              <div className="bg-white/20 rounded px-3 py-1 text-sm">WHO-GMP</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/80 hover:text-white transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="/franchise" className="text-white/80 hover:text-white transition-colors">
                  Franchise Opportunity
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products/tablets-capsules" className="text-white/80 hover:text-white transition-colors">
                  Tablets & Capsules
                </Link>
              </li>
              <li>
                <Link href="/products/syrups" className="text-white/80 hover:text-white transition-colors">
                  Syrups & Dry Syrups
                </Link>
              </li>
              <li>
                <Link href="/products/injections" className="text-white/80 hover:text-white transition-colors">
                  Injections
                </Link>
              </li>
              <li>
                <Link href="/products/nutraceuticals" className="text-white/80 hover:text-white transition-colors">
                  Nutraceuticals
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">+91 9173636128</span>
              </div>
              <div className="flex items-start">
                <Mail className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">alexaindia121@gmail.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">Gujarat, India</span>
              </div>
              <div className="flex items-start">
                <Globe className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">Pan-India Presence</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 text-sm">© 2024 Alexa Biopharma Pvt. Ltd. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-white/80 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/80 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
