export interface Product {
  id: string
  name: string
  type: string
  composition: string
  strength?: string
  pack: string
  packing: string
  category: string
  image: string
}

export const productsData: Product[] = [
  // Tablets & Capsules
  {
    id: "safe-100",
    name: "SAFE-100",
    type: "Tab",
    composition: "Cefixime I.P.",
    strength: "100 mg",
    pack: "10x10",
    packing: "Alu-Alu",
    category: "tablets-capsules",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "safe-200-lb",
    name: "SAFE-200 (LB)",
    type: "Tab",
    composition: "Cefixime I.P. + Lactic Acid Bacillus",
    strength: "200 mg + 60 MS",
    pack: "10x10",
    packing: "Alu-Alu",
    category: "tablets-capsules",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "safe-o",
    name: "SAFE-O",
    type: "Tab",
    composition: "Ofloxacin",
    strength: "200 mg",
    pack: "10x10",
    packing: "Alu-Alu",
    category: "tablets-capsules",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "safe-az",
    name: "SAFE-AZ",
    type: "Tab",
    composition: "Azithromycin",
    strength: "250 mg",
    pack: "10x10",
    packing: "Alu-Alu",
    category: "tablets-capsules",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "2mox-kid-forte",
    name: "2MOX KID-FORTE",
    type: "Tab",
    composition: "Amoxycillin + Clavulanic Acid",
    strength: "400 mg + 57 mg",
    pack: "10 x 10",
    packing: "Aluminium Strip",
    category: "tablets-capsules",
    image: "/placeholder.svg?height=100&width=100",
  },

  // Nutraceuticals
  {
    id: "rd-cobal",
    name: "RD-COBAL",
    type: "Cap",
    composition: "Vitamin B12, Alpha Lipoic Acid, Biotin & Inositol cap",
    pack: "10x1x10",
    packing: "Mono Alu-Alu",
    category: "nutraceuticals",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "ridox",
    name: "RIDOX",
    type: "Cap",
    composition:
      "Astaxanthin, Lutein, Spirulina, Vitamin C Green Tea Extract & Antioxidants, Vitamin D3 & Vitamin B-Complex & Minerals Cap",
    pack: "10x1x15",
    packing: "Mono Blister",
    category: "nutraceuticals",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "me-400",
    name: "ME-400",
    type: "Softgel Cap",
    composition:
      "Vitamin E Natural 400 mg, Wheat Germ Oil 30 mg, Omega-3 Fatty Acids, Calcium Carbonate, Magnesium Oxide, Zinc Sulphate, Manganese Sulphate, Copper Sulphate, Chromium Chloride, Sodium Molybdate, Potassium Iodide, Sodium Selenate, D3 1 Tablet",
    strength: "400 mg + 100 mg + 30 mg",
    pack: "10 x 10",
    packing: "Blister",
    category: "nutraceuticals",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "nobona-fort",
    name: "NOBONA FORT",
    type: "Tab",
    composition:
      "Calcium Citrate, Calcitriol, Cyanocobalamin, Folic Acid, Methylcobalamin, Pyridoxal Phosphate, Magnesium, D3 Tablets",
    pack: "10 x 10",
    packing: "Alu-Alu",
    category: "nutraceuticals",
    image: "/placeholder.svg?height=100&width=100",
  },

  // Syrups
  {
    id: "lycolife",
    name: "LYCOLIFE",
    type: "Syp",
    composition: "Lycopene, Multivitamins & Multiminerals Syrup",
    pack: "200 ml",
    packing: "Outer",
    category: "syrups",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "onvita",
    name: "ONVITA",
    type: "Syp",
    composition: "Multivitamin, Multimineral Syrup",
    pack: "200 ML",
    packing: "Outer",
    category: "syrups",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "onvita-syp",
    name: "ONVITA SYP",
    type: "Syp",
    composition: "Multivitamin, Multimineral Syrup",
    pack: "100 ml",
    packing: "Outer",
    category: "syrups",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "biztozym-b",
    name: "BIZTOZYM-B",
    type: "Syp",
    composition: "Diastase(1:1200) + Pepsin(1:3000)",
    strength: "50 mg + 10 mg",
    pack: "200 ml",
    packing: "Outer",
    category: "syrups",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "biztozym-k",
    name: "BIZTOZYM-K",
    type: "Syp",
    composition: "Diastase(1:1200) + Pepsin(1:3000)",
    strength: "50 mg + 10 mg",
    pack: "100 ml",
    packing: "Outer",
    category: "syrups",
    image: "/placeholder.svg?height=100&width=100",
  },

  // Injections
  {
    id: "rd-cobal-inj",
    name: "RD-COBAL",
    type: "Inj",
    composition:
      "Methylcobalamin + Pyridoxine HCL I.P. + Nicotinamide I.P. + Benzyl Alcohol (As Preservative) + Methylcobalamin I.P. + Folic Acid I.P. + Niacinamide I.P.",
    strength: "1500 mcg + 100 mg + 100 mg + 2% v/v + 2500 mcg + 0.7 mg + 12 mg",
    pack: "Dispo Pack",
    packing: "Dispo Pack",
    category: "injections",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "cobal-plus",
    name: "COBAL PLUS",
    type: "Inj",
    composition: "Methylcobalamin + Folic Acid I.P. + Niacinamide I.P.",
    strength: "2500 mcg + 0.7 mg + 12 mg",
    pack: "Dispo Pack",
    packing: "Dispo Pack",
    category: "injections",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "bolta-50",
    name: "BOLTA-50",
    type: "Inj",
    composition: "Nandrolone Decanoate",
    strength: "50 mg",
    pack: "Dispo Pack",
    packing: "Dispo Pack",
    category: "injections",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "merosef",
    name: "MEROSEF",
    type: "Inj",
    composition: "Meropenem Trihydrate",
    strength: "1000 mg",
    pack: "Vial + W.F.I",
    packing: "Vial + W.F.I",
    category: "injections",
    image: "/placeholder.svg?height=100&width=100",
  },

  // Ointments & Solutions
  {
    id: "rdnac-gel",
    name: "RDNAC GEL",
    type: "Oint",
    composition:
      "Linseed oil B.P. + Diclofenac Diethylamine B.P. + Eq. to Diclofenac sodium + Methyl Salicylate I.P. + Menthol I.P. + Benzyl Alcohol I.P. + Luliconazole Methyl Paraben I.P. + Benzyl Alcohol I.P.",
    strength: "3.00%w/w + 1.16%w/w + 1%w/w + 10%w/w + 5%w/w + 1% w/w + 1% w/w + 1% w/w",
    pack: "30 gm",
    packing: "Outer",
    category: "ointments",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "elizole",
    name: "ELIZOLE",
    type: "Oint",
    composition: "Luliconazole Methyl Paraben I.P. + Benzyl Alcohol I.P.",
    strength: "1% w/w + 1% w/w",
    pack: "20 GM",
    packing: "Tray Pack with Outer",
    category: "ointments",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "jodin-oz",
    name: "JODIN-OZ",
    type: "Cream",
    composition: "Povidone Iodine I.P. + Ornidazole I.P.",
    strength: "5% w/w + 1% w/w",
    pack: "20gm",
    packing: "Outer",
    category: "ointments",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "muforce",
    name: "MUFORCE",
    type: "Soap",
    composition: "Ciclopirox",
    strength: "1.0% w/w",
    pack: "75 gm",
    packing: "Outer",
    category: "ointments",
    image: "/placeholder.svg?height=100&width=100",
  },

  // Other Preparations
  {
    id: "jolyte-ors",
    name: "JOLYTE-ORS",
    type: "Sachet",
    composition: "Oral Rehydration Salts-Citrate",
    pack: "1x10 of 21 gm",
    packing: "Sachet",
    category: "others",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "anergy",
    name: "ANERGY",
    type: "Energy Drink",
    composition: "ENERGY DRINK POWDER",
    strength: "Orange Flavour",
    pack: "105 gm",
    packing: "Sachet in outer",
    category: "others",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "bespore",
    name: "BESPORE",
    type: "Soap",
    composition: "Lactobacillus Sporogenes + Prebiotic + Inulin Fructo Oligosaccharides + Iron Zinc",
    strength: "2 Billions",
    pack: "10 x 5 ml",
    packing: "Outer",
    category: "others",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "apb",
    name: "APB",
    type: "Sachet",
    composition: "Prebiotic + Probiotic + Iron Zinc",
    strength: "Orange Flavour",
    pack: "1x20 of 1.5 gm",
    packing: "Sachet",
    category: "others",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export const categories = {
  "tablets-capsules": {
    name: "Tablets & Capsules",
    description:
      "Comprehensive range of solid dosage forms including antibiotics, analgesics, antacids, and specialty formulations.",
    icon: "💊",
  },
  syrups: {
    name: "Syrups & Dry Syrups",
    description:
      "Liquid formulations for all age groups including pediatric syrups, cough syrups, and antibiotic suspensions.",
    icon: "🧴",
  },
  injections: {
    name: "Injections",
    description:
      "Injectable pharmaceutical solutions including antibiotics, analgesics, and specialty therapeutic injections.",
    icon: "💉",
  },
  nutraceuticals: {
    name: "Nutraceuticals",
    description:
      "Health and wellness supplements including vitamins, minerals, protein supplements, and herbal formulations.",
    icon: "🌿",
  },
  ointments: {
    name: "Ointments & Solutions",
    description:
      "Topical formulations including gels, creams, ointments, and medicated soaps for external applications.",
    icon: "🧴",
  },
  others: {
    name: "Other Preparations",
    description:
      "Specialized formulations including ORS, energy drinks, probiotics, and other therapeutic preparations.",
    icon: "📦",
  },
}

export function getProductsByCategory(category: string): Product[] {
  return productsData.filter((product) => product.category === category)
}

export function searchProducts(query: string): Product[] {
  if (!query.trim()) return []

  const searchTerm = query.toLowerCase()
  return productsData.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.composition.toLowerCase().includes(searchTerm) ||
      product.type.toLowerCase().includes(searchTerm),
  )
}
