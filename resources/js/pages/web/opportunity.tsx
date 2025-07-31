import { Head, Link } from "@inertiajs/react"
import HomeLayout from '@/layouts/home-layout';

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
    Handshake,
    TrendingUp,
    Users,
    Award,
    CheckCircle,
    DollarSign,
    MapPin,
    Phone,
    Mail,
    ArrowRight,
    Star,
} from "lucide-react"

export default function OpportunityPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        state: "",
        experience: "",
        investment: "",
        message: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
        console.log("Form submitted:", formData)
    }

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }
    return (
        <HomeLayout>
            <Head title="Opportunity" />
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
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-['Poppins']">Join Hands. Grow Together.</h1>
                        <p className="text-xl lg:text-2xl mb-8 opacity-90">
                            Be your own boss. Earn more. Grow faster with Alexa Biopharma.
                        </p>
                        <p className="text-lg mb-8 opacity-80">
                            Opportunities available across India for entrepreneurs, MRs, and ASMs
                        </p>
                    </div>
                </section>

                {/* Why Partner With Us */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#1E62A2] mb-12 font-['Poppins']">
                            Why Partner With Alexa Biopharma?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <Card className="text-center hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <div className="w-16 h-16 bg-[#1E62A2] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Award className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="font-bold mb-2">Quality Products</h3>
                                    <p className="text-sm text-gray-600">ISOcertified formulations</p>
                                </CardContent>
                            </Card>
                            <Card className="text-center hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <div className="w-16 h-16 bg-[#37A7DF] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <TrendingUp className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="font-bold mb-2">High Margins</h3>
                                    <p className="text-sm text-gray-600">Competitive pricing with good profit margins</p>
                                </CardContent>
                            </Card>
                            <Card className="text-center hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <div className="w-16 h-16 bg-[#91C2E5] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Users className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="font-bold mb-2">Marketing Support</h3>
                                    <p className="text-sm text-gray-600">Complete promotional and marketing assistance</p>
                                </CardContent>
                            </Card>
                            <Card className="text-center hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <div className="w-16 h-16 bg-[#1E62A2] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Handshake className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="font-bold mb-2">Transparent Dealings</h3>
                                    <p className="text-sm text-gray-600">Clear terms and honest business practices</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#1E62A2] mb-12 font-['Poppins']">
                            Benefits of PCD Pharma Opportunity
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-semibold mb-2">Monopoly Rights</h3>
                                            <p className="text-gray-600">Exclusive distribution rights in your territory</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-semibold mb-2">Low Investment</h3>
                                            <p className="text-gray-600">Start your business with minimal capital requirement</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-semibold mb-2">Complete Product Range</h3>
                                            <p className="text-gray-600">500+ SKUs across multiple therapeutic segments</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-semibold mb-2">Marketing Materials</h3>
                                            <p className="text-gray-600">Visual aids, literature, and promotional support</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-semibold mb-2">Timely Supply</h3>
                                            <p className="text-gray-600">Consistent stock availability and quick delivery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-[#1E62A2] to-[#37A7DF] rounded-lg p-8 text-white">
                                <DollarSign className="w-16 h-16 mb-6" />
                                <h3 className="text-2xl font-bold mb-4">Investment Range</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span>Minimum Investment:</span>
                                        <span className="font-bold">₹50,000</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>Recommended Investment:</span>
                                        <span className="font-bold">₹1,00,000</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>Expected ROI:</span>
                                        <span className="font-bold">25-30%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Steps to Get Started */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#1E62A2] mb-12 font-['Poppins']">
                            Steps to Get Started
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-[#1E62A2] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                                    1
                                </div>
                                <h3 className="font-semibold mb-2">Submit Application</h3>
                                <p className="text-sm text-gray-600">Fill out the opportunity inquiry form with your details</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-[#37A7DF] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                                    2
                                </div>
                                <h3 className="font-semibold mb-2">Initial Discussion</h3>
                                <p className="text-sm text-gray-600">Our team will contact you for detailed discussion</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-[#91C2E5] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                                    3
                                </div>
                                <h3 className="font-semibold mb-2">Agreement Signing</h3>
                                <p className="text-sm text-gray-600">Finalize terms and sign the opportunity agreement</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-[#1E62A2] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                                    4
                                </div>
                                <h3 className="font-semibold mb-2">Start Business</h3>
                                <p className="text-sm text-gray-600">Begin operations with our complete support</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Success Stories */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#1E62A2] mb-12 font-['Poppins']">
                            Success Stories
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="text-gray-700 mb-4">
                                        "Started with Alexa Biopharma 2 years ago. The support and product quality helped me build a
                                        successful business. Now earning 3x more than my previous job!"
                                    </p>
                                    <div className="font-semibold">- Rajesh Kumar</div>
                                    <div className="text-sm text-gray-500">Mumbai, Maharashtra</div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="text-gray-700 mb-4">
                                        "The opportunity model is transparent and profitable. Marketing support is excellent. My territory sales
                                        have grown by 150% in just 18 months."
                                    </p>
                                    <div className="font-semibold">- Priya Sharma</div>
                                    <div className="text-sm text-gray-500">Delhi, NCR</div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="text-gray-700 mb-4">
                                        "Best decision I made was partnering with Alexa Biopharma. Quality products, good margins, and
                                        excellent support team. Highly recommended!"
                                    </p>
                                    <div className="font-semibold">- Amit Patel</div>
                                    <div className="text-sm text-gray-500">Ahmedabad, Gujarat</div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Inquiry Form */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#1E62A2] mb-12 font-['Poppins']">
                                Opportunity Inquiry Form
                            </h2>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-center text-xl">Ready to Start Your Journey? Let's Connect!</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <Label htmlFor="phone">Phone Number *</Label>
                                                <Input
                                                    id="phone"
                                                    value={formData.phone}
                                                    onChange={(e) => handleInputChange("phone", e.target.value)}
                                                    placeholder="Enter your phone number"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <Label htmlFor="city">City *</Label>
                                                <Input
                                                    id="city"
                                                    value={formData.city}
                                                    onChange={(e) => handleInputChange("city", e.target.value)}
                                                    placeholder="Enter your city"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <Label htmlFor="state">State *</Label>
                                                <Select onValueChange={(value) => handleInputChange("state", value)}>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select your state" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="andhra-pradesh">Andhra Pradesh</SelectItem>
                                                        <SelectItem value="gujarat">Gujarat</SelectItem>
                                                        <SelectItem value="maharashtra">Maharashtra</SelectItem>
                                                        <SelectItem value="rajasthan">Rajasthan</SelectItem>
                                                        <SelectItem value="uttar-pradesh">Uttar Pradesh</SelectItem>
                                                        <SelectItem value="other">Other</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div>
                                                <Label htmlFor="experience">Experience in Pharma</Label>
                                                <Select onValueChange={(value) => handleInputChange("experience", value)}>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select experience" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="fresher">Fresher</SelectItem>
                                                        <SelectItem value="1-3">1-3 Years</SelectItem>
                                                        <SelectItem value="3-5">3-5 Years</SelectItem>
                                                        <SelectItem value="5+">5+ Years</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>

                                        <div>
                                            <Label htmlFor="investment">Investment Capacity</Label>
                                            <Select onValueChange={(value) => handleInputChange("investment", value)}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select investment range" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="50k-1l">₹50,000 - ₹1,00,000</SelectItem>
                                                    <SelectItem value="1l-2l">₹1,00,000 - ₹2,00,000</SelectItem>
                                                    <SelectItem value="2l-5l">₹2,00,000 - ₹5,00,000</SelectItem>
                                                    <SelectItem value="5l+">₹5,00,000+</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div>
                                            <Label htmlFor="message">Message</Label>
                                            <Textarea
                                                id="message"
                                                value={formData.message}
                                                onChange={(e) => handleInputChange("message", e.target.value)}
                                                placeholder="Tell us about your business goals and any questions you have..."
                                                rows={4}
                                            />
                                        </div>

                                        <Button type="submit" size="lg" className="w-full bg-[#1E62A2] hover:bg-[#1E62A2]/90">
                                            Submit Inquiry <ArrowRight className="ml-2 w-5 h-5" />
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Contact Information */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#1E62A2] mb-12 font-['Poppins']">
                            Get in Touch
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <Card className="text-center">
                                <CardContent className="p-6">
                                    <Phone className="w-12 h-12 text-[#1E62A2] mx-auto mb-4" />
                                    <h3 className="font-semibold mb-2">Call Us</h3>
                                    <p className="text-gray-600 mb-2">+91 9173636128</p>
                                    <p className="text-sm text-gray-500">Mon-Sat: 9:00 AM - 6:00 PM</p>
                                </CardContent>
                            </Card>
                            <Card className="text-center">
                                <CardContent className="p-6">
                                    <Mail className="w-12 h-12 text-[#1E62A2] mx-auto mb-4" />
                                    <h3 className="font-semibold mb-2">Email Us</h3>
                                    <p className="text-gray-600 mb-2">alexaindia121@gmail.com</p>
                                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                                </CardContent>
                            </Card>
                            <Card className="text-center">
                                <CardContent className="p-6">
                                    <MapPin className="w-12 h-12 text-[#1E62A2] mx-auto mb-4" />
                                    <h3 className="font-semibold mb-2">Visit Us</h3>
                                    <p className="text-gray-600 mb-2">Gujarat, India</p>
                                    <p className="text-sm text-gray-500">Head Office</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </div>
        </HomeLayout>
    )
}
