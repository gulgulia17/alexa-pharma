import { Head, Link, usePage } from "@inertiajs/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import HomeLayout from '@/layouts/home-layout';
import {
    Globe,
    Building2,
    CheckCircle,
    ArrowRight,
    Phone,
    Mail,
    MapPin,
    Target,
    Heart,
    Handshake,
    Download
} from "lucide-react"

export default function HomePage() {
    const { props } = usePage();
    const settings: any = props.settings;
    const about: any = props.about;

    return (
        <HomeLayout>
            <Head title="Home" />
            <div className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="relative bg-[url('/images/pharma-cover.jpg')] bg-cover bg-center text-white py-20 lg:py-32">
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/40"></div>

                    <div className="relative container mx-auto px-4 text-center">
                        {/* Logo */}
                        <div className="mb-8">
                            <img
                                src={`/storage/${settings.logo}`}
                                alt="Alexa Biopharma"
                                className="h-16 w-auto object-contain mx-auto bg-white p-2 rounded-md shadow-md"
                            />
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-['Poppins']">
                            Dedicated to High-Quality, Affordable Healthcare
                        </h1>
                        <p className="text-xl lg:text-2xl mb-8 opacity-90">ISO 9001:2015 Certified | WHO-GMP Facilities</p>
                        <Button size="lg" className="bg-white text-[#1E62A2] hover:bg-gray-100">
                            Explore Our Journey
                        </Button>
                    </div>
                </section>

                {/* Who We Are */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-[#1E62A2] mb-6 font-['Poppins']">Who We Are</h2>
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    {about.who_we_are}
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Badge className="bg-[#1E62A2] text-white px-4 py-2">10+ Years Experience</Badge>
                                    <Badge className="bg-[#37A7DF] text-white px-4 py-2">Pan-India Presence</Badge>
                                    <Badge className="bg-[#91C2E5] text-white px-4 py-2">300+ Products</Badge>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-[#91C2E5] to-[#37A7DF] rounded-lg p-8 text-center">
                                <Building2 className="w-32 h-32 text-white mx-auto mb-6" />
                                <h3 className="text-white text-2xl font-semibold mb-4">Modern Manufacturing Facility</h3>
                                <p className="text-white/90">State-of-the-art WHO-GMP compliant manufacturing units</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="border-l-4 border-l-[#1E62A2]">
                                <CardContent className="p-8">
                                    <div className="flex items-center mb-6">
                                        <Heart className="w-12 h-12 text-[#1E62A2] mr-4" />
                                        <h3 className="text-2xl font-bold text-[#1E62A2] font-['Poppins']">Our Mission</h3>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed">
                                        To contribute to the welfare of humanity by offering high-quality, affordable, and effective
                                        pharmaceutical formulations that improve health outcomes and enhance the quality of life for people
                                        across India.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="border-l-4 border-l-[#37A7DF]">
                                <CardContent className="p-8">
                                    <div className="flex items-center mb-6">
                                        <Target className="w-12 h-12 text-[#37A7DF] mr-4" />
                                        <h3 className="text-2xl font-bold text-[#37A7DF] font-['Poppins']">Our Vision</h3>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed">
                                        To be the most reliable partner in the Indian healthcare sector, recognized for our commitment to
                                        quality, innovation, and ethical business practices while expanding our reach to serve communities
                                        nationwide.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Our Commitment */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#1E62A2] mb-12 font-['Poppins']">
                            Our Commitment to Quality & Growth
                        </h2>

                        {/* Product Segments */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                            <Card className="text-center hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <div className="w-16 h-16 bg-[#1E62A2] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-white font-bold text-2xl">💊</span>
                                    </div>
                                    <h3 className="font-semibold mb-2">Tablets & Capsules</h3>
                                    <p className="text-sm text-gray-600">Comprehensive range of solid dosage forms</p>
                                </CardContent>
                            </Card>
                            <Card className="text-center hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <div className="w-16 h-16 bg-[#37A7DF] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-white font-bold text-2xl">🧴</span>
                                    </div>
                                    <h3 className="font-semibold mb-2">Syrups & Dry Syrups</h3>
                                    <p className="text-sm text-gray-600">Liquid formulations for all age groups</p>
                                </CardContent>
                            </Card>
                            <Card className="text-center hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <div className="w-16 h-16 bg-[#91C2E5] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-white font-bold text-2xl">💉</span>
                                    </div>
                                    <h3 className="font-semibold mb-2">Injections</h3>
                                    <p className="text-sm text-gray-600">Injectable pharmaceutical solutions</p>
                                </CardContent>
                            </Card>
                            <Card className="text-center hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <div className="w-16 h-16 bg-[#1E62A2] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-white font-bold text-2xl">🌿</span>
                                    </div>
                                    <h3 className="font-semibold mb-2">Nutraceuticals</h3>
                                    <p className="text-sm text-gray-600">Health and wellness supplements</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Why Choose Alexa */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#1E62A2] mb-12 font-['Poppins'] flex items-center justify-center gap-2">
                            <span>Why Choose</span>
                            <img
                                src={`/storage/${settings.logo}`}
                                alt="Alexa Biopharma"
                                className="h-[1em] w-auto inline-block align-middle"
                            />
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="flex items-start space-x-4">
                                <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold mb-2">ISO 9001:2015 Certified</h3>
                                    <p className="text-gray-600 text-sm">
                                        Quality management system certification ensuring consistent quality
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold mb-2">WHO-GMP Manufacturing</h3>
                                    <p className="text-gray-600 text-sm">
                                        World Health Organization Good Manufacturing Practices compliance
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold mb-2">Pan-India Opportunity Network</h3>
                                    <p className="text-gray-600 text-sm">Extensive distribution network across all states</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold mb-2">Marketing Support</h3>
                                    <p className="text-gray-600 text-sm">Comprehensive marketing and promotional support for partners</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold mb-2">Wide Therapeutic Portfolio</h3>
                                    <p className="text-gray-600 text-sm">Diverse range covering multiple therapeutic segments</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold mb-2">Competitive Pricing</h3>
                                    <p className="text-gray-600 text-sm">Affordable healthcare solutions without compromising quality</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Join Hands */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="bg-gradient-to-r from-[#1E62A2] to-[#37A7DF] rounded-lg p-8 lg:p-12 text-white text-center">
                            <Handshake className="w-16 h-16 mx-auto mb-6" />
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-['Poppins']">Join Hands with Alexa</h2>
                            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                                We invite entrepreneurs, Medical Representatives, Area Sales Managers, and healthcare professionals to
                                partner with us in our mission to make quality healthcare accessible to all.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button asChild size="lg" className="bg-white text-[#1E62A2] hover:bg-gray-100">
                                    <Link href={route('opportunity')}>Become a Partner</Link>
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="hover:border-[#1E62A2] text-[#1E62A2] hover:bg-[#1E62A2] hover:text-white text-white bg-transparent"
                                >
                                    <Link href="/products">View Our Products</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Expanding Across India */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#1E62A2] mb-8 font-['Poppins']">
                            Expanding Across India
                        </h2>
                        <div className="bg-gradient-to-br from-[#91C2E5] to-[#37A7DF] rounded-lg p-8 lg:p-12 text-white">
                            <Globe className="w-24 h-24 mx-auto mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Pan-India Presence</h3>
                            <p className="text-lg mb-6 opacity-90">
                                Currently serving customers across multiple states with plans to expand into untapped regions
                            </p>
                            <p className="text-xl font-semibold">Looking for partners in untapped regions</p>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#1E62A2] mb-12 font-['Poppins']">
                            Get in Touch
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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

                        {/* CTA Footer */}
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-[#1E62A2] mb-4 font-['Poppins']">
                                "Be your own boss. Earn more. Grow faster."
                            </h3>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button asChild size="lg" className="bg-[#1E62A2] hover:bg-[#1E62A2]/90">
                                    <Link href={route('opportunity')}>
                                        Opportunity Inquiry <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="border-[#1E62A2] text-[#1E62A2] hover:bg-[#1E62A2] hover:text-white bg-transparent"
                                >
                                    <Link href="/products">View Products</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </HomeLayout>
    );
}
