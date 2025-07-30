import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, Send, Building2, Globe, Users } from "lucide-react"
import { Head } from "@inertiajs/react"
import { useToast } from "@/hooks/use-toast"

import HomeLayout from '@/layouts/home-layout';

export default function ContactPage() {
    const { toast } = useToast()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            toast({
                title: "Message sent successfully",
                description: "Thank you for contacting us. We'll get back to you soon.",
            })
            setFormData({ name: "", email: "", phone: "", subject: "", message: "" })

        } catch (error) {
            console.error("Failed to submit contact form", error)
            toast({
                title: "Error submitting form",
                description: "Check your internet connection or try again later.",
            })
        }
    }

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    return (
        <HomeLayout>
            <Head title="Contact" />
            <div className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-[#1E62A2] via-[#37A7DF] to-[#91C2E5] text-white py-20">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative container mx-auto px-4 text-center">
                        <div className="mb-8">
                            <img
                                src="/logo-only.png"
                                alt="Alexa Biopharma"
                                width={250}
                                height={100}
                                className="h-16 w-auto object-contain mx-auto bg-white"
                            />
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-['Poppins']">Get in Touch</h1>
                        <p className="text-xl lg:text-2xl mb-8 opacity-90">
                            We're here to help you grow your pharmaceutical business
                        </p>
                        <p className="text-lg opacity-80">
                            Contact us for opportunity opportunities, product inquiries, or any questions
                        </p>
                    </div>
                </section>

                {/* Contact Information Cards */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                            <Card className="text-center hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <Phone className="w-12 h-12 text-[#1E62A2] mx-auto mb-4" />
                                    <h3 className="font-semibold mb-2">Call Us</h3>
                                    <p className="text-gray-600 mb-2">+91 9173636128</p>
                                    <p className="text-sm text-gray-500">Mon-Sat: 9:00 AM - 6:00 PM</p>
                                </CardContent>
                            </Card>
                            <Card className="text-center hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <Mail className="w-12 h-12 text-[#1E62A2] mx-auto mb-4" />
                                    <h3 className="font-semibold mb-2">Email Us</h3>
                                    <p className="text-gray-600 mb-2">alexaindia121@gmail.com</p>
                                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                                </CardContent>
                            </Card>
                            <Card className="text-center hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <MapPin className="w-12 h-12 text-[#1E62A2] mx-auto mb-4" />
                                    <h3 className="font-semibold mb-2">Head Office</h3>
                                    <p className="text-gray-600 mb-2">Gujarat, India</p>
                                    <p className="text-sm text-gray-500">Corporate Headquarters</p>
                                </CardContent>
                            </Card>
                            <Card className="text-center hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <Clock className="w-12 h-12 text-[#1E62A2] mx-auto mb-4" />
                                    <h3 className="font-semibold mb-2">Business Hours</h3>
                                    <p className="text-gray-600 mb-2">Mon - Sat</p>
                                    <p className="text-sm text-gray-500">9:00 AM - 6:00 PM IST</p>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Contact Form and Map */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Contact Form */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-2xl text-[#1E62A2] font-['Poppins']">Send us a Message</CardTitle>
                                    <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <Label htmlFor="name">Full Name *</Label>
                                                <Input
                                                    id="name"
                                                    value={formData.name}
                                                    onChange={(e) => handleInputChange("name", e.target.value)}
                                                    placeholder="Enter your full name"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <Label htmlFor="email">Email Address *</Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={(e) => handleInputChange("email", e.target.value)}
                                                    placeholder="Enter your email"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <Label htmlFor="phone">Phone Number</Label>
                                                <Input
                                                    id="phone"
                                                    value={formData.phone}
                                                    onChange={(e) => handleInputChange("phone", e.target.value)}
                                                    placeholder="Enter your phone number"
                                                />
                                            </div>
                                            <div>
                                                <Label htmlFor="subject">Subject</Label>
                                                <Select onValueChange={(value) => handleInputChange("subject", value)}>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select subject" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="opportunity">Inquiry</SelectItem>
                                                        <SelectItem value="products">Product Information</SelectItem>
                                                        <SelectItem value="partnership">Business Partnership</SelectItem>
                                                        <SelectItem value="support">Customer Support</SelectItem>
                                                        <SelectItem value="other">Other</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>

                                        <div>
                                            <Label htmlFor="message">Message *</Label>
                                            <Textarea
                                                id="message"
                                                value={formData.message}
                                                onChange={(e) => handleInputChange("message", e.target.value)}
                                                placeholder="Tell us how we can help you..."
                                                rows={5}
                                                required
                                            />
                                        </div>

                                        <Button type="submit" size="lg" className="w-full bg-[#1E62A2] hover:bg-[#1E62A2]/90">
                                            <Send className="mr-2 w-5 h-5" />
                                            Send Message
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>

                            {/* Company Information */}
                            <div className="space-y-8">
                                <Card>
                                    <CardContent className="p-6">
                                        <Building2 className="w-12 h-12 text-[#1E62A2] mb-4" />
                                        <h3 className="text-xl font-bold mb-4 text-[#1E62A2]">About Our Company</h3>
                                        <p className="text-gray-700 mb-4">
                                            Alexa Biopharma Pvt. Ltd. is a trusted pharmaceutical company with over a decade of experience in
                                            providing high-quality, affordable healthcare solutions.
                                        </p>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex items-center">
                                                <span className="font-semibold mr-2">Founded:</span>
                                                <span>2010+</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="font-semibold mr-2">Headquarters:</span>
                                                <span>Gujarat, India</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="font-semibold mr-2">Products:</span>
                                                <span>500+ SKUs</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardContent className="p-6">
                                        <Globe className="w-12 h-12 text-[#1E62A2] mb-4" />
                                        <h3 className="text-xl font-bold mb-4 text-[#1E62A2]">Our Presence</h3>
                                        <p className="text-gray-700 mb-4">
                                            We have established a strong distribution network across India, serving customers in multiple states
                                            with plans for further expansion.
                                        </p>
                                        <div className="grid grid-cols-2 gap-4 text-sm">
                                            <div>
                                                <span className="font-semibold">Current Markets:</span>
                                                <ul className="mt-2 space-y-1 text-gray-600">
                                                    <li>• Gujarat</li>
                                                    <li>• Maharashtra</li>
                                                    <li>• Rajasthan</li>
                                                    <li>• Madhya Pradesh</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <span className="font-semibold">Expanding To:</span>
                                                <ul className="mt-2 space-y-1 text-gray-600">
                                                    <li>• Uttar Pradesh</li>
                                                    <li>• Karnataka</li>
                                                    <li>• Andhra Pradesh</li>
                                                    <li>• Tamil Nadu</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardContent className="p-6">
                                        <Users className="w-12 h-12 text-[#1E62A2] mb-4" />
                                        <h3 className="text-xl font-bold mb-4 text-[#1E62A2]">Partnership Opportunities</h3>
                                        <p className="text-gray-700 mb-4">
                                            We're always looking for dedicated partners to join our growing network. Whether you're an
                                            entrepreneur, MR, or ASM, we have opportunities for you.
                                        </p>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex items-center">
                                                <span className="font-semibold mr-2">Investment:</span>
                                                <span>Starting from ₹50,000</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="font-semibold mr-2">Support:</span>
                                                <span>Complete marketing assistance</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="font-semibold mr-2">Territory:</span>
                                                <span>Exclusive distribution rights</span>
                                            </div>
                                        </div>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="mt-3 border-[#1E62A2] text-[#1E62A2] hover:bg-[#1E62A2] hover:text-white bg-transparent"
                                        >
                                            Download PDF
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Map Section */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#1E62A2] mb-12 font-['Poppins']">Find Us</h2>
                        <div className="bg-gradient-to-br from-[#91C2E5] to-[#37A7DF] rounded-lg p-8 text-center text-white">
                            <MapPin className="w-16 h-16 mx-auto mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Our Location</h3>
                            <p className="text-lg mb-4">
                                Alexa Biopharma Pvt. Ltd.
                                <br />
                                Gujarat, India
                            </p>
                            <p className="opacity-90">
                                Visit our corporate office to discuss partnership opportunities and learn more about our products.
                            </p>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#1E62A2] mb-12 font-['Poppins']">
                            Frequently Asked Questions
                        </h2>
                        <div className="max-w-3xl mx-auto space-y-6">
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="font-bold mb-2">What is the minimum investment required for a opportunity?</h3>
                                    <p className="text-gray-600">
                                        The minimum investment starts from ₹50,000, though we recommend ₹1,00,000 for better market
                                        penetration and inventory management.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="font-bold mb-2">Do you provide marketing support?</h3>
                                    <p className="text-gray-600">
                                        Yes, we provide complete marketing support including visual aids, literature, promotional materials,
                                        and digital marketing assistance.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="font-bold mb-2">What territories are available for opportunity?</h3>
                                    <p className="text-gray-600">
                                        We're expanding across India and have opportunities available in various states. Contact us to check
                                        availability in your preferred location.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="font-bold mb-2">How long does it take to set up a opportunity?</h3>
                                    <p className="text-gray-600">
                                        Once the agreement is signed, you can start operations within 15-30 days with our complete setup
                                        support.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </div>
        </HomeLayout>
    )
}
