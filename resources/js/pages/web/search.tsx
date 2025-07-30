import { useState, useEffect } from "react"
import { Head, Link } from "@inertiajs/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Search } from "lucide-react"
import { searchProducts, type Product } from "@/lib/products-data"
import HomeLayout from '@/layouts/home-layout';

export default function SearchPage() {
    const [query, setQuery] = useState("")
    const [results, setResults] = useState<Product[]>([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const delayedSearch = setTimeout(() => {
            if (query.trim()) {
                setIsLoading(true)
                const searchResults = searchProducts(query)
                setResults(searchResults)
                setIsLoading(false)
            } else {
                setResults([])
            }
        }, 300)

        return () => clearTimeout(delayedSearch)
    }, [query])

    return (
        <HomeLayout>
            <Head title="Search" />
            <div className="min-h-screen bg-white">
                {/* Header */}
                <section className="bg-gradient-to-r from-[#1E62A2] to-[#37A7DF] text-white py-16">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center mb-6">
                            <Button asChild variant="ghost" className="text-white hover:bg-white/20 mr-4">
                                <Link href="/products">
                                    <ArrowLeft className="w-5 h-5 mr-2" />
                                    Back to Products
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
                                    className="h-12 w-auto object-contain mx-auto "
                                />
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-bold mb-6 font-['Poppins']">Search Products</h1>
                            <p className="text-xl opacity-90">Find the right pharmaceutical products for your needs</p>
                        </div>
                    </div>
                </section>

                {/* Search Section */}
                <section className="py-12">
                    <div className="container mx-auto px-4">
                        <div className="max-w-2xl mx-auto mb-8">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                                <Input
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Search products by name or composition..."
                                    className="pl-12 py-4 text-lg border-2 border-gray-200 focus:border-[#1E62A2] rounded-lg"
                                />
                            </div>
                            {query && (
                                <p className="text-sm text-gray-600 mt-2">
                                    {isLoading ? "Searching..." : `Found ${results.length} results for "${query}"`}
                                </p>
                            )}
                        </div>

                        {/* Search Results */}
                        {results.length > 0 && (
                            <div className="space-y-4">
                                {results.map((product) => (
                                    <Card key={product.id} className="hover:shadow-lg transition-shadow">
                                        <CardContent className="p-6">
                                            <div className="flex items-start gap-6">
                                                {/* Product Image */}
                                                <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <img
                                                        src={product.image || "/placeholder.svg"}
                                                        alt={product.name}
                                                        className="w-16 h-16 object-contain"
                                                    />
                                                </div>

                                                {/* Product Details */}
                                                <div className="flex-1">
                                                    <div className="flex items-center justify-between mb-3">
                                                        <h3 className="text-xl font-bold text-[#1E62A2]">{product.name}</h3>
                                                        <Badge variant="outline" className="ml-2">
                                                            {product.type}
                                                        </Badge>
                                                    </div>

                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                                        <div>
                                                            <span className="text-sm font-medium text-gray-700">Composition:</span>
                                                            <p className="text-sm text-gray-600">{product.composition}</p>
                                                        </div>

                                                        {product.strength && (
                                                            <div>
                                                                <span className="text-sm font-medium text-gray-700">Strength:</span>
                                                                <p className="text-sm text-gray-600">{product.strength}</p>
                                                            </div>
                                                        )}

                                                        <div>
                                                            <span className="text-sm font-medium text-gray-700">Pack:</span>
                                                            <p className="text-sm text-gray-600">{product.pack}</p>
                                                        </div>

                                                        <div>
                                                            <span className="text-sm font-medium text-gray-700">Packing:</span>
                                                            <p className="text-sm text-gray-600">{product.packing}</p>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center justify-between">
                                                        <Badge variant="secondary" className="bg-[#91C2E5] text-[#1E62A2]">
                                                            {product.category.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                                                        </Badge>
                                                        <Button size="sm" className="bg-[#1E62A2] hover:bg-[#1E62A2]/90">
                                                            Enquire Now
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        )}

                        {/* No Results */}
                        {query && results.length === 0 && !isLoading && (
                            <div className="text-center py-16">
                                <div className="text-6xl mb-4">🔍</div>
                                <h3 className="text-2xl font-bold text-gray-700 mb-2">No Products Found</h3>
                                <p className="text-gray-600 mb-6">
                                    We couldn't find any products matching "{query}". Try searching with different keywords.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button
                                        onClick={() => setQuery("")}
                                        variant="outline"
                                        className="border-[#1E62A2] text-[#1E62A2] hover:bg-[#1E62A2] hover:text-white"
                                    >
                                        Clear Search
                                    </Button>
                                    <Button asChild className="bg-[#1E62A2] hover:bg-[#1E62A2]/90">
                                        <Link href="/products">Browse All Products</Link>
                                    </Button>
                                </div>
                            </div>
                        )}

                        {/* Empty State */}
                        {!query && (
                            <div className="text-center py-16">
                                <div className="text-6xl mb-4">💊</div>
                                <h3 className="text-2xl font-bold text-gray-700 mb-2">Start Your Search</h3>
                                <p className="text-gray-600 mb-6">
                                    Enter a product name or composition to find the pharmaceutical products you need.
                                </p>
                                <div className="max-w-md mx-auto">
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <h4 className="font-semibold mb-2">Popular Searches:</h4>
                                            <ul className="space-y-1 text-gray-600">
                                                <li>• Cefixime</li>
                                                <li>• Multivitamin</li>
                                                <li>• Paracetamol</li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <h4 className="font-semibold mb-2">Search Tips:</h4>
                                            <ul className="space-y-1 text-gray-600">
                                                <li>• Use generic names</li>
                                                <li>• Try brand names</li>
                                                <li>• Search by composition</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-[#1E62A2] mb-6 font-['Poppins']">Need Help Finding Products?</h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Our team can help you find the right products for your specific requirements.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-[#1E62A2] hover:bg-[#1E62A2]/90">
                                <Link href={route('contact')} prefetch>Contact Our Team</Link>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="border-[#1E62A2] text-[#1E62A2] hover:bg-[#1E62A2] hover:text-white bg-transparent"
                            >
                                <Link href={route('opportunity')}>Opportunity Inquiry</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </HomeLayout>
    )
}
