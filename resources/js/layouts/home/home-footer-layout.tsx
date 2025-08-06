import { Phone, Mail, MapPin, Globe } from "lucide-react"
import { usePage, Link } from '@inertiajs/react';

export default function Footer() {

    const { props } = usePage();
    const settings: any = props.settings;
    const about: any = props.about;
    const categories: any = props.categories;
    const awards: any = props.awards;

    return (
        <footer className="bg-[#1E62A2] text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <div className="mb-4">
                            <div className="w-[8rem] bg-white">
                                <img
                                    src={`/storage/${settings?.logo}`}
                                    alt="Alexa Biopharma"
                                    width={180}
                                    height={70}
                                    className="h-10 w-auto object-contain"
                                />
                            </div>
                        </div>
                        <p className="text-white/80 mb-4">
                            {settings?.footer_text}
                        </p>
                        <div className="flex space-x-2">
                            {awards?.length ? (
                                awards.map((award: any, index: number) => (
                                    <div key={index} className="bg-white/20 rounded px-3 py-1 text-sm">{award.title}</div>
                                ))
                            ) : null}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="/about" className="text-white/80 hover:text-white transition-colors">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="/products" className="text-white/80 hover:text-white transition-colors">
                                    Our Products
                                </a>
                            </li>
                            <li>
                                <a href={route('opportunity')} className="text-white/80 hover:text-white transition-colors">
                                    Opportunity
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="text-white/80 hover:text-white transition-colors">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Our Products</h4>
                        <ul className="space-y-2">
                            {categories?.length ? (
                                categories.map((category: any, index: number) => (
                                    <li key={index}>
                                        <Link
                                            href={route('product.show', category.slug)}
                                            className="text-white/80 hover:text-white transition-colors"
                                        >
                                            {category.name}
                                        </Link>
                                    </li>
                                ))
                            ) : null}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
                        <div className="space-y-3">
                            <div className="flex items-start">
                                <Phone className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                                <a href={`tel:${settings?.phone}`} className="text-white/80">{settings?.phone}</a>
                            </div>
                            <div className="flex items-start">
                                <Mail className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                                <a href={`mail:${settings?.email}`} className="text-white/80">{settings?.email}</a>
                            </div>
                            <div className="flex items-start">
                                <MapPin className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-white/80">{settings?.address}</span>
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
                        <p className="text-white/80 text-sm">© 2025 Alexa Biopharma Pvt. Ltd. All rights reserved.</p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href={route('privacy')} className="text-white/80 hover:text-white text-sm transition-colors">
                                Privacy Policy
                            </a>
                            <a href={route('terms')} className="text-white/80 hover:text-white text-sm transition-colors">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
