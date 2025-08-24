import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, Send, Building2, Globe, Users } from "lucide-react"
import { Head, usePage, useForm } from "@inertiajs/react"
import { useToast } from "@/hooks/use-toast"

import HomeLayout from '@/layouts/home-layout';

export default function ContactPage() {
    const { toast } = useToast()
    const { props } = usePage();

    const settings: any = props.settings;

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        post('/contact', {
            preserveScroll: true,
            onSuccess: () => {
                toast({
                    title: 'Message sent successfully',
                    description: "Thank you for contacting us. We'll get back to you soon.",
                })
                reset()
            },
            onError: () => {
                toast({
                    title: 'Error submitting form',
                    description: 'Please check your input and try again.',
                })
            },
        })
    }

    return (
        <HomeLayout>
            <Head title="Contact" />
            <div className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="relative bg-[url('/images/pharma-cover.jpg')] bg-cover bg-center text-white py-20 lg:py-32">
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/60"></div>

                    <div className="relative container mx-auto px-4 text-center">
                        {/* Logo */}
                        <div className="mb-8">
                            <img
                                src={`/storage/${settings.logo}`}
                                alt="Alexa Biopharma"
                                className="h-30 w-auto object-contain mx-auto bg-white p-2 rounded-md shadow-md"
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
                                    <p className="text-gray-600 mb-2">
                                        <a href={`tel:${settings.phone}`}>{settings.phone}</a>
                                    </p>
                                    <p className="text-sm text-gray-500">Mon-Sat: 9:00 AM - 6:00 PM</p>
                                </CardContent>
                            </Card>
                            <Card className="text-center hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <Mail className="w-12 h-12 text-[#1E62A2] mx-auto mb-4" />
                                    <h3 className="font-semibold mb-2">Email Us</h3>
                                    <p className="text-gray-600 mb-2">
                                        <a href={`mail:${settings.email}`}>{settings.email}</a>
                                    </p>
                                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                                </CardContent>
                            </Card>
                            <Card className="text-center hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <MapPin className="w-12 h-12 text-[#1E62A2] mx-auto mb-4" />
                                    <h3 className="font-semibold mb-2">Head Office</h3>
                                    <p className="text-gray-600 mb-2">{settings.address}</p>
                                    <p className="text-sm text-gray-500">Corporate Headquarter</p>
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
                                                    value={data.name}
                                                    onChange={(e) => setData('name', e.target.value)}
                                                    placeholder="Enter your full name"
                                                    className={errors.name ? 'border-red-500' : ''}
                                                    required
                                                />
                                                {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
                                            </div>
                                            <div>
                                                <Label htmlFor="email">Email Address*</Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    value={data.email}
                                                    onChange={(e) => setData('email', e.target.value)}
                                                    placeholder="Enter your email"
                                                    className={errors.email ? 'border-red-500' : ''}
                                                    required
                                                />
                                                {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <Label htmlFor="phone">Phone Number</Label>
                                                <Input
                                                    id="phone"
                                                    value={data.phone}
                                                    onChange={(e) => setData('phone', e.target.value)}
                                                    placeholder="Enter your phone number"
                                                    className={errors.phone ? 'border-red-500' : ''}
                                                />
                                                {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
                                            </div>
                                            <div>
                                                <Label htmlFor="subject">Subject</Label>
                                                <Select
                                                    value={data.subject}
                                                    onValueChange={(val) => setData('subject', val)}
                                                >
                                                    <SelectTrigger className={errors.subject ? 'border-red-500' : ''}>
                                                        <SelectValue placeholder="Select subject" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="opportunity">Inquiry</SelectItem>
                                                        <SelectItem value="products">Product Info</SelectItem>
                                                        <SelectItem value="partnership">Partnership</SelectItem>
                                                        <SelectItem value="support">Support</SelectItem>
                                                        <SelectItem value="other">Other</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                {errors.subject && <p className="text-sm text-red-500 mt-1">{errors.subject}</p>}
                                            </div>
                                        </div>

                                        <div>
                                            <Label htmlFor="message">Message *</Label>
                                            <Textarea
                                                id="message"
                                                value={data.message}
                                                onChange={(e) => setData('message', e.target.value)}
                                                placeholder="Tell us how we can help you..."
                                                rows={5}
                                                className={errors.message ? 'border-red-500' : ''}
                                                required
                                            />
                                            {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
                                        </div>

                                        <Button type="submit" size="lg" className="w-full bg-[#1E62A2] hover:bg-[#1E62A2]/90" disabled={processing}>
                                            <Send className="mr-2 w-5 h-5" /> Send Message
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>

                            {/* Company Information */}
                            <div className="space-y-8">
                                <Card>
                                    <CardContent className="p-6">
                                        <Building2 className="w-12 h-12 text-[#1E62A2] mb-4" />
                                        <h3 className="text-xl font-bold mb-4 text-[#1E62A2]">
                                            <span>About</span>
                                            <img
                                                src={`/storage/${settings.logo}`}
                                                alt="Alexa Biopharma"
                                                className="max-h-[1em] w-auto inline-block"
                                            />
                                        </h3>
                                        <p className="text-gray-700 mb-4">
                                            We are a trusted pharmaceutical company with over a decade of experience in
                                            providing high-quality, affordable healthcare solutions.
                                        </p>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex items-center">
                                                <span className="font-semibold mr-2">Founded:</span>
                                                <span>{settings.founded ?? 2019}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="font-semibold mr-2">Headquarter:</span>
                                                <span>{settings.address}</span>
                                            </div>
                                            {/* <div className="flex items-center">
                                                <span className="font-semibold mr-2">Products:</span>
                                                <span>500+ SKUs</span>
                                            </div> */}
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
                                        {/* <div className="grid grid-cols-2 gap-4 text-sm">
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
                                        </div> */}
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
                                            {/* <div className="flex items-center">
                                                <span className="font-semibold mr-2">Investment:</span>
                                                <span>Starting from ₹50,000</span>
                                            </div> */}
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
                                            onClick={() => {
                                                const phone = settings?.phone?.replace(/\D/g, "");
                                                const message = encodeURIComponent('Hello, I would like to know more about partnership opportunities with *ALEXA*.');
                                                window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
                                            }}
                                        >
                                            Contact Now
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section >

                {/* Map Section */}
                < section className="py-16 bg-gray-50" >
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#1E62A2] mb-12 font-['Poppins']">Find Us</h2>
                        <div className="bg-gradient-to-br from-[#91C2E5] to-[#37A7DF] rounded-lg p-8 text-center text-white">
                            <MapPin className="w-16 h-16 mx-auto mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Our Location</h3>
                            <p className="text-lg mb-4">
                                {settings.address}
                            </p>
                            <p className="opacity-90">
                                Visit our corporate office to discuss partnership opportunities and learn more about our products.
                            </p>
                        </div>
                    </div>
                </section >

                {/* FAQ Section */}
                < section className="py-16" >
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
                </section >
            </div >
        </HomeLayout >
    )
}
