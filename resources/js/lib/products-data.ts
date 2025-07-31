export interface Product {
  id: number
  name: string,
  slug: string,
  type: string,
  type_label: string,
  compositions: string,
  pack: string,
  size: string,
  packing: string,
  image: string,
  is_featured: boolean,
  category: Category
}

export interface Category {
  id: number
  name:string,
  slug:string,
  description:string,
  icon:string,
  image:string,
  sku_count:string,
  is_featured:boolean
}

export async function searchProducts(query: string): Promise<Product[]> {
  if (!query.trim()) return [];

  const response = await fetch(`/api/products/search?query=${encodeURIComponent(query)}`);
  
  if (!response.ok) throw new Error("Failed to fetch products");
  
  return await response.json() as Product[];
}