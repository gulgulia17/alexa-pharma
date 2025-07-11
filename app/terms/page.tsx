import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, FileText, AlertTriangle, Scale, Users } from "lucide-react"

export default function TermsPage() {
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
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 font-['Poppins']">Terms & Conditions</h1>
            <p className="text-xl opacity-90">Terms of service for using our website and services</p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <p className="text-gray-600 mb-4">
                <strong>Last updated:</strong> July 2025
              </p>
              <p className="text-gray-700 leading-relaxed">
                These Terms and Conditions ("Terms") govern your use of the Alexa Biopharma Pvt. Ltd. website and
                services. By accessing or using our website, you agree to be bound by these Terms.
              </p>
            </div>

            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <FileText className="w-6 h-6 text-[#1E62A2] mr-3" />
                    <h2 className="text-2xl font-bold text-[#1E62A2]">Acceptance of Terms</h2>
                  </div>
                  <p className="text-gray-700">
                    By accessing and using this website, you accept and agree to be bound by the terms and provision of
                    this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Users className="w-6 h-6 text-[#1E62A2] mr-3" />
                    <h2 className="text-2xl font-bold text-[#1E62A2]">Use License</h2>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      Permission is granted to temporarily download one copy of the materials on Alexa Biopharma's
                      website for personal, non-commercial transitory viewing only. This is the grant of a license, not
                      a transfer of title, and under this license you may not:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Modify or copy the materials</li>
                      <li>Use the materials for any commercial purpose or for any public display</li>
                      <li>Attempt to reverse engineer any software contained on the website</li>
                      <li>Remove any copyright or other proprietary notations from the materials</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <AlertTriangle className="w-6 h-6 text-[#1E62A2] mr-3" />
                    <h2 className="text-2xl font-bold text-[#1E62A2]">Disclaimer</h2>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      The materials on Alexa Biopharma's website are provided on an 'as is' basis. Alexa Biopharma makes
                      no warranties, expressed or implied, and hereby disclaims and negates all other warranties
                      including without limitation, implied warranties or conditions of merchantability, fitness for a
                      particular purpose, or non-infringement of intellectual property or other violation of rights.
                    </p>
                    <p className="text-gray-700">
                      Further, Alexa Biopharma does not warrant or make any representations concerning the accuracy,
                      likely results, or reliability of the use of the materials on its website or otherwise relating to
                      such materials or on any sites linked to this site.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Scale className="w-6 h-6 text-[#1E62A2] mr-3" />
                    <h2 className="text-2xl font-bold text-[#1E62A2]">Limitations</h2>
                  </div>
                  <p className="text-gray-700">
                    In no event shall Alexa Biopharma or its suppliers be liable for any damages (including, without
                    limitation, damages for loss of data or profit, or due to business interruption) arising out of the
                    use or inability to use the materials on Alexa Biopharma's website, even if Alexa Biopharma or an
                    authorized representative has been notified orally or in writing of the possibility of such damage.
                    Because some jurisdictions do not allow limitations on implied warranties, or limitations of
                    liability for consequential or incidental damages, these limitations may not apply to you.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-[#1E62A2] mb-4">Accuracy of Materials</h2>
                  <p className="text-gray-700">
                    The materials appearing on Alexa Biopharma's website could include technical, typographical, or
                    photographic errors. Alexa Biopharma does not warrant that any of the materials on its website are
                    accurate, complete, or current. Alexa Biopharma may make changes to the materials contained on its
                    website at any time without notice. However, Alexa Biopharma does not make any commitment to update
                    the materials.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-[#1E62A2] mb-4">Links</h2>
                  <p className="text-gray-700">
                    Alexa Biopharma has not reviewed all of the sites linked to our website and is not responsible for
                    the contents of any such linked site. The inclusion of any link does not imply endorsement by Alexa
                    Biopharma of the site. Use of any such linked website is at the user's own risk.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-[#1E62A2] mb-4">Franchise Terms</h2>
                  <div className="space-y-4">
                    <p className="text-gray-700">Specific terms and conditions apply to franchise opportunities:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>All franchise inquiries are subject to approval and verification</li>
                      <li>Investment amounts and terms are subject to change</li>
                      <li>Territory rights are granted based on availability</li>
                      <li>Separate franchise agreements will govern the relationship</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-[#1E62A2] mb-4">Product Information</h2>
                  <p className="text-gray-700">
                    All product information, including compositions, strengths, and packaging details, is provided for
                    informational purposes only. Actual products may vary. For accurate and current product information,
                    please contact us directly.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-[#1E62A2] mb-4">Modifications</h2>
                  <p className="text-gray-700">
                    Alexa Biopharma may revise these terms of service for its website at any time without notice. By
                    using this website, you are agreeing to be bound by the then current version of these terms of
                    service.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-[#1E62A2] mb-4">Governing Law</h2>
                  <p className="text-gray-700">
                    These terms and conditions are governed by and construed in accordance with the laws of India and
                    you irrevocably submit to the exclusive jurisdiction of the courts in Gujarat, India.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-[#1E62A2] mb-4">Contact Information</h2>
                  <p className="text-gray-700 mb-4">
                    If you have any questions about these Terms and Conditions, please contact us:
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
