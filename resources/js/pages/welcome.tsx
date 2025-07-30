import { Head, Link } from "@inertiajs/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import HomeLayout from '@/layouts/home-layout';
import {
    Globe,
    Building2,
    CheckCircle,
    Package,
    Pill,
    Beaker,
    Syringe,
    Leaf,
    Award,
    Users,
    Truck,
    Star,
    ArrowRight,
    Phone,
    Mail,
    MapPin,
} from "lucide-react"

export default function HomePage() {
    return (
        <HomeLayout>
            <Head title="Home" />
            <div className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-[#1E62A2] via-[#37A7DF] to-[#91C2E5] text-white py-20 lg:py-32">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative container mx-auto px-4 text-center">
                        <div className="mb-8">
                            <img
                                src="/logo-only.png"
                                alt="Alexa Biopharma"
                                width={300}
                                height={120}
                                className="h-16 w-auto object-contain mx-auto bg-white"
                            />
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-['Poppins']">
                            A Trusted Name in Indian Pharmaceuticals
                        </h1>
                        <p className="text-xl lg:text-2xl mb-8 opacity-90">ISO 9001:2015 Certified | WHO-GMP Facilities</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="bg-white text-[#1E62A2] hover:bg-gray-100">
                                <Link href="/products">Explore Products</Link>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="border-white text-white hover:bg-white hover:text-[#1E62A2] bg-transparent"
                            >
                                <Link href={route('opportunity')}>Become a Partner</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Quick Info Bar */}
                <section className="py-12 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <Card className="text-center">
                                <CardContent className="p-6">
                                    <Globe className="w-12 h-12 text-[#1E62A2] mx-auto mb-4" />
                                    <h3 className="font-semibold mb-2">Pan-India Presence</h3>
                                    <p className="text-sm text-gray-600">Nationwide distribution network</p>
                                </CardContent>
                            </Card>
                            <Card className="text-center">
                                <CardContent className="p-6">
                                    <Building2 className="w-12 h-12 text-[#1E62A2] mx-auto mb-4" />
                                    <h3 className="font-semibold mb-2">10+ Years in Healthcare</h3>
                                    <p className="text-sm text-gray-600">Decade of trusted service</p>
                                </CardContent>
                            </Card>
                            <Card className="text-center">
                                <CardContent className="p-6">
                                    <CheckCircle className="w-12 h-12 text-[#1E62A2] mx-auto mb-4" />
                                    <h3 className="font-semibold mb-2">ISO & WHO-GMP Certified</h3>
                                    <p className="text-sm text-gray-600">Quality assured manufacturing</p>
                                </CardContent>
                            </Card>
                            <Card className="text-center">
                                <CardContent className="p-6">
                                    <Package className="w-12 h-12 text-[#1E62A2] mx-auto mb-4" />
                                    <h3 className="font-semibold mb-2">500+ Product SKUs</h3>
                                    <p className="text-sm text-gray-600">Comprehensive product range</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* About Preview */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-[#1E62A2] mb-6 font-['Poppins']">
                                    About Alexa Biopharma
                                </h2>
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    Alexa Biopharma Pvt. Ltd. is a trusted name in the Indian pharmaceutical industry, dedicated to
                                    providing high-quality, affordable healthcare solutions. With our ISO 9001:2015 certified and WHO-GMP
                                    compliant facilities, we ensure the highest standards in pharmaceutical manufacturing.
                                </p>
                                <Button asChild className="bg-[#1E62A2] hover:bg-[#1E62A2]/90">
                                    <Link href="/about">
                                        Read More About Us <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </Button>
                            </div>
                            <div className="bg-gradient-to-br from-[#91C2E5] to-[#37A7DF] rounded-lg p-8 text-center">
                                <div className="mb-4">
                                </div>
                                <Building2 className="w-24 h-24 text-white mx-auto mb-4" />
                                <h3 className="text-white text-xl font-semibold">Modern Manufacturing Facility</h3>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Product Categories */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#1E62A2] mb-12 font-['Poppins']">
                            Our Product Categories
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                                <CardContent className="p-6 text-center">
                                    <Pill className="w-16 h-16 text-[#1E62A2] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                    <h3 className="font-semibold mb-2">Tablets & Capsules</h3>
                                    <p className="text-sm text-gray-600 mb-4">Wide range of solid dosage forms</p>
                                    <Button
                                        asChild
                                        variant="outline"
                                        size="sm"
                                        className="border-[#1E62A2] text-[#1E62A2] hover:bg-[#1E62A2] hover:text-white bg-transparent"
                                    >
                                        <Link href="/products/tablets-capsules">View Products</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                                <CardContent className="p-6 text-center">
                                    <Beaker className="w-16 h-16 text-[#1E62A2] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                    <h3 className="font-semibold mb-2">Syrups & Dry Syrups</h3>
                                    <p className="text-sm text-gray-600 mb-4">Liquid formulations for all ages</p>
                                    <Button
                                        asChild
                                        variant="outline"
                                        size="sm"
                                        className="border-[#1E62A2] text-[#1E62A2] hover:bg-[#1E62A2] hover:text-white bg-transparent"
                                    >
                                        <Link href="/products/syrups">View Products</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                                <CardContent className="p-6 text-center">
                                    <Syringe className="w-16 h-16 text-[#1E62A2] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                    <h3 className="font-semibold mb-2">Injections</h3>
                                    <p className="text-sm text-gray-600 mb-4">Injectable pharmaceutical solutions</p>
                                    <Button
                                        asChild
                                        variant="outline"
                                        size="sm"
                                        className="border-[#1E62A2] text-[#1E62A2] hover:bg-[#1E62A2] hover:text-white bg-transparent"
                                    >
                                        <Link href="/products/injections">View Products</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                                <CardContent className="p-6 text-center">
                                    <Leaf className="w-16 h-16 text-[#1E62A2] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                    <h3 className="font-semibold mb-2">Nutraceuticals</h3>
                                    <p className="text-sm text-gray-600 mb-4">Health and wellness supplements</p>
                                    <Button
                                        asChild
                                        variant="outline"
                                        size="sm"
                                        className="border-[#1E62A2] text-[#1E62A2] hover:bg-[#1E62A2] hover:text-white bg-transparent"
                                    >
                                        <Link href="/products/nutraceuticals">View Products</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Why Choose Alexa */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#1E62A2] mb-12 font-['Poppins']">
                            Why Choose Alexa Biopharma
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <Award className="w-16 h-16 text-[#1E62A2] mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-4">High-Quality Formulations</h3>
                                <p className="text-gray-600">
                                    All products manufactured under strict quality control with ISO and WHO-GMP standards
                                </p>
                            </div>
                            <div className="text-center">
                                <Users className="w-16 h-16 text-[#1E62A2] mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-4">Transparent Opportunity Model</h3>
                                <p className="text-gray-600">Clear partnership terms with comprehensive support for partners</p>
                            </div>
                            <div className="text-center">
                                <Truck className="w-16 h-16 text-[#1E62A2] mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-4">Pan-India Distribution Support</h3>
                                <p className="text-gray-600">Extensive distribution network ensuring timely delivery across India</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Awards & Certifications */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#1E62A2] mb-12 font-['Poppins']">
                            Awards & Certifications
                        </h2>
                        <div className="flex flex-wrap justify-center items-center gap-8">
                            <Badge variant="outline" className="p-4 text-lg border-[#1E62A2] text-[#1E62A2]">
                                ISO 9001:2015 Certified
                            </Badge>
                            <Badge variant="outline" className="p-4 text-lg border-[#1E62A2] text-[#1E62A2]">
                                WHO-GMP Compliant
                            </Badge>
                            <Badge variant="outline" className="p-4 text-lg border-[#1E62A2] text-[#1E62A2]">
                                Quality Excellence Award
                            </Badge>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#1E62A2] mb-12 font-['Poppins']">
                            What Our Partners Say
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
                                        "Alexa Biopharma has been an excellent partner. Their product quality and support have helped us grow
                                        our business significantly."
                                    </p>
                                    <div className="font-semibold">- Rajesh Kumar, Mumbai</div>
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
                                        "The opportunity is transparent and profitable. Great products with excellent marketing support."
                                    </p>
                                    <div className="font-semibold">- Priya Sharma, Delhi</div>
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
                                        "Reliable partner with consistent quality. Their distribution support is outstanding across all
                                        regions."
                                    </p>
                                    <div className="font-semibold">- Amit Patel, Gujarat</div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Opportunity CTA */}
                <section className="py-16 bg-gradient-to-r from-[#1E62A2] to-[#37A7DF] text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-['Poppins']">Join Hands. Grow Together.</h2>
                        <p className="text-xl mb-8 opacity-90">
                            Be your own boss. Earn more. Grow faster with Alexa Biopharma opportunity opportunities.
                        </p>
                        <Button asChild size="lg" className="bg-white text-[#1E62A2] hover:bg-gray-100">
                            <Link href={route('opportunity')}>Apply for Opportunity</Link>
                        </Button>
                    </div>
                </section>

                {/* Contact Info */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div>
                                <Phone className="w-12 h-12 text-[#1E62A2] mx-auto mb-4" />
                                <h3 className="font-semibold mb-2">Call Us</h3>
                                <p className="text-gray-600">+91 9173636128</p>
                            </div>
                            <div>
                                <Mail className="w-12 h-12 text-[#1E62A2] mx-auto mb-4" />
                                <h3 className="font-semibold mb-2">Email Us</h3>
                                <p className="text-gray-600">alexaindia121@gmail.com</p>
                            </div>
                            <div>
                                <MapPin className="w-12 h-12 text-[#1E62A2] mx-auto mb-4" />
                                <h3 className="font-semibold mb-2">Visit Us</h3>
                                <p className="text-gray-600">Gujarat, India</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </HomeLayout>
    );
}
