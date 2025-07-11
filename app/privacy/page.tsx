import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Shield, Eye, Lock, FileText } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1E62A2] via-[#37A7DF] to-[#91C2E5] text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Button asChild variant="ghost" className="text-white hover:bg-white/20 mr-4">
              <Link href="/">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
          <div className="text-center">
            <div className="mb-6">
              <Image
                src="/logo-only.png"
                alt="Alexa Biopharma"
                width={200}
                height={80}
                className="h-12 w-auto object-contain mx-auto"
              />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 font-['Poppins']">Privacy Policy</h1>
            <p className="text-xl opacity-90">Your privacy and data protection are important to us</p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <p className="text-gray-600 mb-4">
                <strong>Last updated:</strong> July 2025
              </p>
              <p className="text-gray-700 leading-relaxed">
                Alexa Biopharma Pvt. Ltd. ("we," "our," or "us") is committed to protecting your privacy. This Privacy
                Policy explains how we collect, use, disclose, and safeguard your information when you visit our website
                or use our services.
              </p>
            </div>

            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Eye className="w-6 h-6 text-[#1E62A2] mr-3" />
                    <h2 className="text-2xl font-bold text-[#1E62A2]">Information We Collect</h2>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Personal Information</h3>
                      <p className="text-gray-700">
                        We may collect personal information that you voluntarily provide to us when you:
                      </p>
                      <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                        <li>Fill out franchise inquiry forms</li>
                        <li>Contact us through our website</li>
                        <li>Subscribe to our newsletters</li>
                        <li>Request product information</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Automatically Collected Information</h3>
                      <p className="text-gray-700">
                        When you visit our website, we may automatically collect certain information about your device
                        and usage patterns, including IP address, browser type, operating system, and pages visited.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <FileText className="w-6 h-6 text-[#1E62A2] mr-3" />
                    <h2 className="text-2xl font-bold text-[#1E62A2]">How We Use Your Information</h2>
                  </div>
                  <p className="text-gray-700 mb-4">We use the information we collect to:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Process and respond to your inquiries and requests</li>
                    <li>Provide information about our products and franchise opportunities</li>
                    <li>Send you marketing communications (with your consent)</li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal obligations</li>
                    <li>Protect our rights and prevent fraud</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Shield className="w-6 h-6 text-[#1E62A2] mr-3" />
                    <h2 className="text-2xl font-bold text-[#1E62A2]">Information Sharing and Disclosure</h2>
                  </div>
                  <p className="text-gray-700 mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your
                    consent, except in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>With service providers who assist us in operating our website and conducting business</li>
                    <li>When required by law or to protect our rights</li>
                    <li>In connection with a business transfer or merger</li>
                    <li>With your explicit consent</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Lock className="w-6 h-6 text-[#1E62A2] mr-3" />
                    <h2 className="text-2xl font-bold text-[#1E62A2]">Data Security</h2>
                  </div>
                  <p className="text-gray-700">
                    We implement appropriate technical and organizational security measures to protect your personal
                    information against unauthorized access, alteration, disclosure, or destruction. However, no method
                    of transmission over the internet or electronic storage is 100% secure.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-[#1E62A2] mb-4">Your Rights</h2>
                  <p className="text-gray-700 mb-4">You have the right to:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Access and update your personal information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Request information about how we use your data</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-[#1E62A2] mb-4">Cookies and Tracking Technologies</h2>
                  <p className="text-gray-700">
                    Our website may use cookies and similar tracking technologies to enhance your browsing experience.
                    You can control cookie settings through your browser preferences.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-[#1E62A2] mb-4">Changes to This Privacy Policy</h2>
                  <p className="text-gray-700">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting
                    the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-[#1E62A2] mb-4">Contact Us</h2>
                  <p className="text-gray-700 mb-4">
                    If you have any questions about this Privacy Policy, please contact us:
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p>
                      <strong>Email:</strong> alexaindia121@gmail.com
                    </p>
                    <p>
                      <strong>Phone:</strong> +91 9173636128
                    </p>
                    <p>
                      <strong>Address:</strong> Gujarat, India
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
