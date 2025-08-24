import HomeLayout from '@/layouts/home-layout';

import { Head, usePage, useForm } from "@inertiajs/react"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
    Handshake,
    Users,
    Award,
    MapPin,
    Phone,
    Mail,
    ArrowRight,
    Star,
} from "lucide-react"

export default function OpportunityPage() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        city: '',
        state: '',
        experience: '',
        message: '',
    })

    const { toast } = useToast()
    const { props } = usePage();

    const settings: any = props.settings;
    const testimonials: any = props.testimonials;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        post(route('opportunity.store'), {
            preserveScroll: true,
            onSuccess: () => {
                toast({
                    title: 'Inquiry submitted',
                    description: 'Thank you for your interest. We will contact you soon.',
                })
                reset()
            },
            onError: () => {
                toast({
                    title: 'Submission failed',
                    description: 'Please check the form and try again.',
                })
            },
        })
    }

    return (
        <HomeLayout>
            <Head title="Opportunity" />
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
                        <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#1E62A2] mb-12 font-['Poppins'] flex items-center justify-center gap-2">
                            <span>Why Partner With</span>
                            <img
                                src={`/storage/${settings.logo}`}
                                alt="Alexa Biopharma"
                                className="h-[1em] w-auto inline-block align-middle"
                            />
                            <span>?</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <Card className="text-center hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <div className="w-16 h-16 bg-[#1E62A2] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Award className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="font-bold mb-2">Quality Products</h3>
                                    <p className="text-sm text-gray-600">ISO Certified Formulations</p>
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

                {/* Steps to Get Started */}
                <section className="py-16 bg-gray-50">
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
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#1E62A2] mb-12 font-['Poppins']">
                            Success Stories
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {
                                testimonials.map((testimonial: any, index: number) => {
                                    return (
                                        <Card key={index}>
                                            <CardContent className="p-6">
                                                <div className="flex mb-4">
                                                    {[...Array(testimonial.rating)].map((_, i) => (
                                                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                                    ))}
                                                </div>
                                                <p className="text-gray-700 mb-4">
                                                    {testimonial.message}
                                                </p>
                                                <div className="font-semibold">- {testimonial.name}</div>
                                                <div className="text-sm text-gray-500">{testimonial.location}</div>
                                            </CardContent>
                                        </Card>
                                    )

                                })
                            }
                        </div>
                    </div>
                </section>

                {/* Inquiry Form */}
                <section className="py-16 bg-gray-50">
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
                                                    value={data.name}
                                                    onChange={(e) => setData("name", e.target.value)}
                                                    placeholder="Enter your full name"
                                                    required
                                                    className={errors.name ? 'border-red-500' : ''}
                                                />
                                                {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
                                            </div>
                                            <div>
                                                <Label htmlFor="email">Email Address *</Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    value={data.email}
                                                    onChange={(e) => setData("email", e.target.value)}
                                                    placeholder="Enter your email"
                                                    required
                                                    className={errors.email ? 'border-red-500' : ''}
                                                />
                                                {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <Label htmlFor="phone">Phone Number *</Label>
                                                <Input
                                                    id="phone"
                                                    value={data.phone}
                                                    onChange={(e) => setData("phone", e.target.value)}
                                                    placeholder="Enter your phone number"
                                                    required
                                                    className={errors.phone ? 'border-red-500' : ''}
                                                />
                                                {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
                                            </div>
                                            <div>
                                                <Label htmlFor="city">City *</Label>
                                                <Input
                                                    id="city"
                                                    value={data.city}
                                                    onChange={(e) => setData("city", e.target.value)}
                                                    placeholder="Enter your city"
                                                    required
                                                    className={errors.city ? 'border-red-500' : ''}
                                                />
                                                {errors.city && <p className="text-sm text-red-500 mt-1">{errors.city}</p>}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <Label htmlFor="state">State *</Label>
                                                <Select onValueChange={(value) => setData("state", value)}>
                                                    <SelectTrigger className={errors.state ? 'border-red-500' : ''}>
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
                                                {errors.state && <p className="text-sm text-red-500 mt-1">{errors.state}</p>}
                                            </div>

                                            <div>
                                                <Label htmlFor="experience">Experience in Pharma</Label>
                                                <Select onValueChange={(value) => setData("experience", value)}>
                                                    <SelectTrigger className={errors.experience ? 'border-red-500' : ''}>
                                                        <SelectValue placeholder="Select experience" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="fresher">Fresher</SelectItem>
                                                        <SelectItem value="1-3">1-3 Years</SelectItem>
                                                        <SelectItem value="3-5">3-5 Years</SelectItem>
                                                        <SelectItem value="5+">5+ Years</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                {errors.experience && <p className="text-sm text-red-500 mt-1">{errors.experience}</p>}
                                            </div>
                                        </div>

                                        <div>
                                            <Label htmlFor="message">Message</Label>
                                            <Textarea
                                                id="message"
                                                value={data.message}
                                                onChange={(e) => setData("message", e.target.value)}
                                                placeholder="Tell us about your business goals and any questions you have..."
                                                rows={4}
                                                className={errors.message ? 'border-red-500' : ''}
                                            />
                                            {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
                                        </div>

                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full bg-[#1E62A2] hover:bg-[#1E62A2]/90"
                                            disabled={processing}
                                        >
                                            Submit Inquiry <ArrowRight className="ml-2 w-5 h-5" />
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Contact Information */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#1E62A2] mb-12 font-['Poppins']">
                            Get in Touch
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <Card className="text-center">
                                <CardContent className="p-6">
                                    <Phone className="w-12 h-12 text-[#1E62A2] mx-auto mb-4" />
                                    <h3 className="font-semibold mb-2">Call Us</h3>
                                    <p className="text-gray-600 mb-2">
                                        <a href={`tel:${settings.phone}`}>{settings.phone}</a>
                                    </p>
                                    <p className="text-sm text-gray-500">Mon-Sat: 9:00 AM - 6:00 PM</p>
                                </CardContent>
                            </Card>
                            <Card className="text-center">
                                <CardContent className="p-6">
                                    <Mail className="w-12 h-12 text-[#1E62A2] mx-auto mb-4" />
                                    <h3 className="font-semibold mb-2">Email Us</h3>
                                    <p className="text-gray-600 mb-2">
                                        <a href={`mail:${settings.email}`}>{settings.email}</a>
                                    </p>
                                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                                </CardContent>
                            </Card>
                            <Card className="text-center">
                                <CardContent className="p-6">
                                    <MapPin className="w-12 h-12 text-[#1E62A2] mx-auto mb-4" />
                                    <h3 className="font-semibold mb-2">Visit Us</h3>
                                    <p className="text-gray-600 mb-2">{settings.address}</p>
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
