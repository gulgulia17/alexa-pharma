import { useState } from "react"
import { usePage, Head, Link } from '@inertiajs/react';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Search, Grid, List } from "lucide-react"
import * as Icons from "lucide-react";

import HomeLayout from '@/layouts/home-layout';

const PRODUCT_TYPES: Record<string, string> = {
    tablet: "Tablet",
    capsule: "Capsule",
    syrup: "Syrup",
    dry_syrup: "Dry Syrup",
    injection: "Injection",
    ointment: "Ointment",
    solution: "Solution",
    nutraceutical: "Nutraceutical",
    other_preparation: "Other Preparation",
};

function cleanCompositionHTML(html: string) {
  return html
    .replace(/style="[^"]*"/gi, "")
    .replace(/\s?(width|height|border)="[^"]*"/gi, "")
    .replace(/<tr[^>]*>(\s*<td[^>]*>\s*<\/td>\s*)*<\/tr>/gi, ""); // removes empty rows
}

function normalizeTable(html: string) {
  return cleanCompositionHTML(html).replace(
    /<td[^>]*>(.*?)<\/td>\s*<td[^>]*>(.*?)<\/td>/gs,
    (_, left, right) => {
      const leftLines = left.split(/<br\s*\/?>/i).map((l) => l.trim());
      const rightLines = right.split(/<br\s*\/?>/i).map((l) => l.trim());

      // Build proper rows
      let rows = leftLines
        .map(
          (l, i) =>
            `<tr><td>${l}</td><td>${rightLines[i] || ""}</td></tr>`
        )
        .join("");

      return rows;
    }
  );
}

export default function CategoryPage({ category, products }: any) {
    const { props } = usePage();
    const settings: any = props.settings;

    const [viewMode, setViewMode] = useState("grid")
    const [searchQuery, setSearchQuery] = useState("")

    const LucideIcons = Icons as unknown as Record<string, React.ComponentType<any>>;
    const IconComponent = LucideIcons[category.icon];

    const allProducts = products;

    products = allProducts.filter((product: any) => {
        const query = searchQuery.toLowerCase();

        return (
            product.name?.toLowerCase().includes(query) ||
            product.compositions_list?.toLowerCase().includes(query) ||
            product.type_label?.toLowerCase().includes(query) ||
            product.type?.toLowerCase().includes(query) ||
            product.pack?.toLowerCase().includes(query) ||
            product.size?.toLowerCase().includes(query) ||
            product.packing?.toLowerCase().includes(query)
        );
    })
    return (
        <HomeLayout>
            <Head title={category.name} />
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
                            <span className="text-4xl mr-4">
                                {IconComponent && (
                                    <IconComponent className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                )}
                            </span>
                            <h1 className="text-4xl lg:text-5xl font-bold font-['Poppins']">{category.name}</h1>
                        </div>
                        <p className="text-xl opacity-90 max-w-3xl">{category.description}</p>
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
                                {products.map((product: any) => (
                                    <Card
                                        key={product.id}
                                        className="hover:shadow-lg transition-all duration-300 group flex flex-col h-full"
                                    >
                                        <CardContent className="p-6 flex flex-col h-full">
                                            {/* Image */}
                                            <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                                                <img
                                                    src={product.image ? `/storage/${product.image}` : `https://placehold.co/500x500?text=${product.name}`}
                                                    alt={product.name}
                                                    className="w-40 h-40 object-contain"
                                                />
                                            </div>

                                            {/* Title & Badge */}
                                            <div className="flex items-center justify-between mb-3">
                                                <h3 className="font-bold text-lg text-[#1E62A2]">{product.name}</h3>
                                                <Badge variant="outline" className="text-xs">
                                                    {product.type_label ?? PRODUCT_TYPES[product.type] ?? product.type}
                                                </Badge>
                                            </div>

                                            {/* Info Section */}
                                            <div className="space-y-2 mb-4 flex-1">
                                                <div className="flex justify-between">
                                                    {product.size && (
                                                        <div>
                                                            <span className="text-sm font-medium text-gray-700">Size:</span>
                                                            <p className="text-sm text-gray-600">{product.size}</p>
                                                        </div>
                                                    )}
                                                    {product.packing && (
                                                        <div>
                                                            <span className="text-sm font-medium text-gray-700">Packing:</span>
                                                            <p className="text-sm text-gray-600">{product.packing}</p>
                                                        </div>
                                                    )}
                                                </div>

                                                {product.compositions && (
                                                    <div>
                                                        <span className="text-sm font-medium text-gray-700">Composition:</span>
                                                        <div className="composition-table mt-2">
                                                            <div
                                                                dangerouslySetInnerHTML={{
                                                                    __html: normalizeTable(product.compositions),
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Button aligned bottom */}
                                            <div className="mt-auto">
                                                <Button
                                                    className="w-full bg-[#1E62A2] hover:bg-[#1E62A2]/90"
                                                    size="sm"
                                                    onClick={() => {
                                                        const phone = settings?.phone?.replace(/\D/g, "");
                                                        const message = `Hello,%0A%0AI want to know more about *${product.name}* - of category *${category?.name}*`;
                                                        window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
                                                    }}
                                                >
                                                    Enquire Now
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                        ) : (
                            <div className="space-y-4">
                                {products.map((product: any) => (
                                    <Card key={product.id} className="hover:shadow-lg transition-shadow">
                                        <CardContent className="p-6">
                                            <div className="flex items-start gap-6">
                                                <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <img
                                                        src={product.image ? `/storage/${product.image}` : `https://placehold.co/500x500?text=${product.name}`}
                                                        alt={product.name}
                                                        className="w-20 h-20 object-contain"
                                                    />
                                                </div>

                                                <div className="flex-1">
                                                    <div className="flex items-center justify-between mb-3">
                                                        <h3 className="text-xl font-bold text-[#1E62A2]">{product.name}</h3>
                                                        <Badge variant="outline" className="ml-2">
                                                            {product.type_label ?? PRODUCT_TYPES[product.type] ?? product.type}
                                                        </Badge>
                                                    </div>

                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                                        {product.compositions_list && (
                                                            <div>
                                                                <span className="text-sm font-medium text-gray-700">Composition:</span>
                                                                <p className="text-sm text-gray-600">{product.compositions_list}</p>
                                                            </div>
                                                        )}

                                                        {product.pack && (
                                                            <div>
                                                                <span className="text-sm font-medium text-gray-700">Pack:</span>
                                                                <p className="text-sm text-gray-600">{product.pack}</p>
                                                            </div>
                                                        )}

                                                        {product.size && (
                                                            <div>
                                                                <span className="text-sm font-medium text-gray-700">Size:</span>
                                                                <p className="text-sm text-gray-600">{product.size}</p>
                                                            </div>
                                                        )}

                                                        {product.packing && (
                                                            <div>
                                                                <span className="text-sm font-medium text-gray-700">Packing:</span>
                                                                <p className="text-sm text-gray-600">{product.packing}</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="flex items-center justify-between">
                                                        <Badge variant="secondary" className="bg-[#91C2E5] text-[#1E62A2]">
                                                            {category?.name}
                                                        </Badge>
                                                        <Button size="sm" className="bg-[#1E62A2] hover:bg-[#1E62A2]/90"
                                                            onClick={() => {
                                                                const phone = settings?.phone?.replace(/\D/g, ""); // ✅ remove non-numeric chars
                                                                const message = `Hello,%0A%0AI want to know more about *${product.name}* - of category *${product.category?.name}*`;
                                                                window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
                                                            }}
                                                        >
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
            </div>
        </HomeLayout>
    )
}
