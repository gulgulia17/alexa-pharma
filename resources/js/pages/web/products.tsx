import { Link, usePage, Head } from "@inertiajs/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Pill, Beaker, Syringe, Leaf, Search, Download, ArrowRight } from "lucide-react"
import HomeLayout from '@/layouts/home-layout';
import * as Icons from "lucide-react";

export default function ProductsPage({ categories, products,sku_count }: any) {
    const { props } = usePage();
    const settings: any = props.settings;
    return (
        <HomeLayout>
            <Head title="Products" />
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
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-['Poppins']">
                            Explore Our Complete Product Portfolio
                        </h1>
                        <p className="text-xl lg:text-2xl mb-8 opacity-90">Affordable, WHO-GMP Certified Formulations Across India</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-white text-[#1E62A2] hover:bg-gray-100">
                                <Download className="mr-2 w-5 h-5" />
                                Download Full Catalogue
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="border-white text-white hover:bg-white hover:text-[#1E62A2] bg-transparent"
                            >
                                <Link href="/contact">Contact for Opportunity</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Search Section */}
                <section className="py-12 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-2xl mx-auto">
                            <Link href="/search" className="block">
                                <div className="relative cursor-pointer">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <Input
                                        placeholder="Search products by name or composition..."
                                        className="pl-10 py-3 text-lg cursor-pointer"
                                        readOnly
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Categories Grid */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#1E62A2] mb-12 font-['Poppins']">
                            Product Categories
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {categories?.length ? (
                                categories.map((category: any, index: number) => {
                                    const LucideIcons = Icons as unknown as Record<string, React.ComponentType<any>>;
                                    const IconComponent = LucideIcons[category.icon] || LucideIcons["Pill"];

                                    return (
                                        <Card className="hover:shadow-xl transition-all duration-300 group cursor-pointer" key={index}>
                                            <CardContent className="p-8 text-center">
                                                <div className="w-20 h-20 bg-gradient-to-br from-[#1E62A2] to-[#37A7DF] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                                    <IconComponent className="w-10 h-10 text-white" />
                                                </div>
                                                <h3 className="text-xl font-bold mb-4 text-[#1E62A2]">{category.name}</h3>
                                                <p className="text-gray-600 mb-6">
                                                    {category.description}
                                                </p>
                                                <div className="text-sm text-gray-500 mb-6">{category.products_count}+ SKUs Available</div>
                                                <Button asChild className="w-full bg-[#1E62A2] hover:bg-[#1E62A2]/90">
                                                    <Link href={route('product.show', category.slug)}>
                                                        View Products <ArrowRight className="ml-2 w-4 h-4" />
                                                    </Link>
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    )
                                })
                            ) : null}
                        </div>
                    </div>
                </section>

                {/* Featured Products Preview */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#1E62A2] mb-12 font-['Poppins']">
                            Featured Products
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products?.length ? (
                                products.map((product: any, index: number) => {
                                    return (
                                        <Card className="hover:shadow-lg transition-shadow relative" key={index}>
                                            <CardContent className="p-6">
                                                <div className="flex items-center justify-between mb-4">
                                                    <h3 className="font-bold text-lg">{product.name}</h3>
                                                    <span className="text-sm bg-[#37A7DF] text-white px-2 py-1 rounded">Tablet</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <p className="text-gray-600 mb-4">
                                                        <strong>Composition:</strong> {product.compositions_list}
                                                    </p>
                                                    <p className="text-gray-600 mb-4">
                                                        <strong>Size:</strong> {product.pack}
                                                    </p>
                                                </div>
                                                <div className="flex justify-between">
                                                    <p className="text-gray-600 mb-4">
                                                        <strong>Pack:</strong> {product.size}
                                                    </p>
                                                    <p className="text-gray-600 mb-4">
                                                        <strong>Packing:</strong> {product.packing}
                                                    </p>
                                                </div>
                                                <Button
                                                    variant="outline"
                                                    className="w-full border-[#1E62A2] text-[#1E62A2] hover:bg-[#1E62A2] hover:text-white bg-transparent absolute bottom-5 w-[90%]"
                                                    onClick={() => {
                                                        const phone = settings?.phone?.replace(/\D/g, "");
                                                        const message = `Hello,%0A%0AI want to know more about *${product.name}* - of category *${product?.category?.name}*`;
                                                        window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
                                                    }}
                                                >
                                                    Enquire Now
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    )
                                })
                            ) : null}
                        </div>
                    </div>
                </section>

                {/* Quality Assurance */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="bg-gradient-to-r from-[#1E62A2] to-[#37A7DF] rounded-lg p-8 lg:p-12 text-white text-center">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-['Poppins']">Quality You Can Trust</h2>
                            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                                All our products are manufactured under strict quality control measures with ISO 9001:2015 certification
                                and WHO-GMP compliance, ensuring the highest standards of pharmaceutical manufacturing.
                            </p>
                            <div className="flex flex-wrap justify-center gap-6">
                                <div className="bg-white/20 rounded-lg p-4">
                                    <div className="font-bold text-lg">ISO</div>
                                    <div className="text-sm opacity-90">Certified</div>
                                </div>
                                <div className="bg-white/20 rounded-lg p-4">
                                    <div className="font-bold text-lg">WHO-GMP</div>
                                    <div className="text-sm opacity-90">Compliant</div>
                                </div>
                                <div className="bg-white/20 rounded-lg p-4">
                                    <div className="font-bold text-lg">{sku_count}+</div>
                                    <div className="text-sm opacity-90">Product SKUs</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Opportunity CTA */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#1E62A2] mb-6 font-['Poppins']">
                            Didn't find what you're looking for?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">Let us help you find the right products for your market needs.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-[#1E62A2] hover:bg-[#1E62A2]/90">
                                <Link href={route('contact')}>Request Custom Quote</Link>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="border-[#1E62A2] text-[#1E62A2] hover:bg-[#1E62A2] hover:text-white bg-transparent"
                            >
                                <Link href={route('opportunity')}>Apply for Opportunity</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </HomeLayout>
    )
}
