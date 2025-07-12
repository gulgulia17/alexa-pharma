import { getProductsByCategory, searchProducts } from './products-data'

describe('getProductsByCategory', () => {
  it('returns only products of the given category', () => {
    const category = 'syrups'
    const result = getProductsByCategory(category)
    expect(result.length).toBeGreaterThan(0)
    expect(result.every(p => p.category === category)).toBe(true)
  })
})

describe('searchProducts', () => {
  it('finds products by name', () => {
    const results = searchProducts('SAFE-100')
    const ids = results.map(p => p.id)
    expect(ids).toContain('safe-100')
  })

  it('finds products by composition', () => {
    const results = searchProducts('ofloxacin')
    const ids = results.map(p => p.id)
    expect(ids).toContain('safe-o')
  })
})
