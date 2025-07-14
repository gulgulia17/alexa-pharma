import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/layout/header'
import { Footer } from './components/layout/footer'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Category from './pages/Category'
import Contact from './pages/Contact'
import Franchise from './pages/Franchise'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Search from './pages/Search'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:category" element={<Category />} />
        <Route path="/search" element={<Search />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
