import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Alexa Biopharma - Trusted Pharmaceutical Company in India",
  description:
    "Alexa Biopharma Pvt. Ltd. - A trusted name in Indian pharmaceuticals. ISO 9001:2015 certified, WHO-GMP compliant. Offering franchise opportunities across India.",
  keywords: "pharmaceutical company, PCD pharma franchise, medicine manufacturer, healthcare, India",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
