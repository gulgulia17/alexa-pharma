<header class="bg-white shadow-sm border-b">
    <div class="bg-[#1E62A2] text-white py-2">
        <div class="container mx-auto px-4">
            <div class="flex justify-between items-center text-sm">
                <div class="flex items-center space-x-6">
                    <div class="flex items-center">
                        <span class="mr-2">☎</span>
                        <span>+91 9173636128</span>
                    </div>
                    <div class="flex items-center">
                        <span class="mr-2">✉</span>
                        <span>alexaindia121@gmail.com</span>
                    </div>
                </div>
                <div class="hidden md:block">
                    <span>ISO 9001:2015 Certified | WHO-GMP Compliant</span>
                </div>
            </div>
        </div>
    </div>
    <div class="container mx-auto px-4">
        <div class="flex justify-between items-center py-4">
            <a href="/" class="flex items-center">
                <img src="/logo-full.png" alt="Alexa Biopharma" width="200" height="80" class="h-12 w-auto object-contain" />
            </a>
            <nav class="hidden md:flex items-center space-x-8">
                <a href="/" class="{{ request()->is('/') ? 'text-[#1E62A2] border-b-2 border-[#1E62A2] pb-1' : 'text-gray-700 hover:text-[#1E62A2]' }}">Home</a>
                <a href="/about" class="{{ request()->is('about*') ? 'text-[#1E62A2] border-b-2 border-[#1E62A2] pb-1' : 'text-gray-700 hover:text-[#1E62A2]' }}">About</a>
                <a href="/products" class="{{ request()->is('products*') ? 'text-[#1E62A2] border-b-2 border-[#1E62A2] pb-1' : 'text-gray-700 hover:text-[#1E62A2]' }}">Products</a>
                <a href="/franchise" class="{{ request()->is('franchise*') ? 'text-[#1E62A2] border-b-2 border-[#1E62A2] pb-1' : 'text-gray-700 hover:text-[#1E62A2]' }}">Franchise</a>
                <a href="/contact" class="{{ request()->is('contact*') ? 'text-[#1E62A2] border-b-2 border-[#1E62A2] pb-1' : 'text-gray-700 hover:text-[#1E62A2]' }}">Contact</a>
            </nav>
            <div class="hidden md:block">
                <a href="/franchise" class="bg-[#1E62A2] hover:bg-[#1E62A2]/90 text-white px-4 py-2 rounded">Get Franchise</a>
            </div>
        </div>
    </div>
</header>
