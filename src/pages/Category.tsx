"use client"

import { useState } from "react"
import { Link, useParams, Navigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Search, Filter, Grid, List } from "lucide-react"
import { getProductsByCategory, categories } from "@/lib/products-data"

interface PageProps {
  params: {
    category: string
  }
}

export default function CategoryPage() {
  const params = useParams()
  const category = params.category as string

  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")

  if (!categories[category as keyof typeof categories]) {
    return <Navigate to="/products" replace />
  }

  const categoryInfo = categories[category as keyof typeof categories]
  const allProducts = getProductsByCategory(category)

  // Filter products based on search query
  const products = allProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.composition.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.type.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
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
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-4">{categoryInfo.icon}</span>
            <h1 className="text-4xl lg:text-5xl font-bold font-['Poppins']">{categoryInfo.name}</h1>
          </div>
          <p className="text-xl opacity-90 max-w-3xl">{categoryInfo.description}</p>
          <div className="mt-6">
            <Badge className="bg-white/20 text-white px-4 py-2">{products.length} Products Available</Badge>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search products..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex border rounded-lg">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  className={`rounded-r-none ${viewMode === "grid" ? "bg-[#1E62A2] text-white" : ""}`}
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  className={`rounded-l-none ${viewMode === "list" ? "bg-[#1E62A2] text-white" : ""}`}
                  onClick={() => setViewMode("list")}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid/List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                      <img
                        src={`https://placehold.co/500x500?text=${product.name}`}
                        alt={product.name}
                        className="w-50 h-50 object-contain"
                      />
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-lg text-[#1E62A2]">{product.name}</h3>
                      <Badge variant="outline" className="text-xs">
                        {product.type}
                      </Badge>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div>
                        <span className="text-sm font-medium text-gray-700">Composition:</span>
                        <p className="text-sm text-gray-600 line-clamp-2">{product.composition}</p>
                      </div>

                      {product.strength && (
                        <div>
                          <span className="text-sm font-medium text-gray-700">Strength:</span>
                          <p className="text-sm text-gray-600">{product.strength}</p>
                        </div>
                      )}

                      <div className="flex justify-between">
                        <div>
                          <span className="text-sm font-medium text-gray-700">Pack:</span>
                          <p className="text-sm text-gray-600">{product.pack}</p>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-700">Packing:</span>
                          <p className="text-sm text-gray-600">{product.packing}</p>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full bg-[#1E62A2] hover:bg-[#1E62A2]/90" size="sm">
                      Enquire Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {products.map((product) => (
                <Card key={product.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      {/* Product Image */}
                      <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <img
                          src={`https://placehold.co/500x500?text=${product.name}`}
                          alt={product.name}
                          className="w-20 h-20 object-contain"
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

          {products.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📦</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No Products Found</h3>
              <p className="text-gray-600">
                {searchQuery
                  ? `No products found matching "${searchQuery}". Try different keywords.`
                  : "We're working on adding more products to this category."}
              </p>
              {searchQuery && (
                <Button
                  onClick={() => setSearchQuery("")}
                  variant="outline"
                  className="mt-4 border-[#1E62A2] text-[#1E62A2] hover:bg-[#1E62A2] hover:text-white"
                >
                  Clear Search
                </Button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#1E62A2] mb-6 font-['Poppins']">Interested in Our Products?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us for detailed product information, pricing, and franchise opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#1E62A2] hover:bg-[#1E62A2]/90">
              Request Product Catalog
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#1E62A2] text-[#1E62A2] hover:bg-[#1E62A2] hover:text-white bg-transparent"
            >
              <Link href="/franchise">Apply for Franchise</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
