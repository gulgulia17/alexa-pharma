import HomeLayout from '@/layouts/home-layout';
import './static.css'

import { Head, Link } from "@inertiajs/react"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicyPage({ title, content }: { title: string, content: string }) {
    return (
        <HomeLayout>
            <Head title={title} />
            <div className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-[#1E62A2] via-[#37A7DF] to-[#91C2E5] text-white py-20">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative container mx-auto px-4">
                        <div className="flex items-center mb-6">
                            <Button asChild variant="ghost" className="text-white hover:bg-white/20 mr-4">
                                <Link to="/">
                                    <ArrowLeft className="w-5 h-5 mr-2" />
                                    Back to Home
                                </Link>
                            </Button>
                        </div>
                        <div className="text-center">
                            <div className="mb-6">
                                <img
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
                            <div
                                className="prose prose-neutral"
                                dangerouslySetInnerHTML={{ __html: content }}
                            />
                        </div>
                    </div>
                </section>
            </div>
        </HomeLayout>
    )
}
