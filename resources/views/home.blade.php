@extends('layout')

@section('title', 'Alexa Biopharma')

@section('content')
<div class="min-h-screen bg-white">
    <section class="relative bg-gradient-to-br from-[#1E62A2] via-[#37A7DF] to-[#91C2E5] text-white py-20 lg:py-32">
        <div class="absolute inset-0 bg-black/10"></div>
        <div class="relative container mx-auto px-4 text-center">
            <div class="mb-8">
                <img src="/logo-only.png" alt="Alexa Biopharma" width="300" height="120" class="h-16 w-auto object-contain mx-auto bg-white" />
            </div>
            <h1 class="text-4xl lg:text-6xl font-bold mb-6 font-['Poppins']">A Trusted Name in Indian Pharmaceuticals</h1>
            <p class="text-xl lg:text-2xl mb-8 opacity-90">ISO 9001:2015 Certified | WHO-GMP Facilities</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/products" class="bg-white text-[#1E62A2] hover:bg-gray-100 px-6 py-3 rounded">Explore Products</a>
                <a href="/franchise" class="border border-white text-white hover:bg-white hover:text-[#1E62A2] px-6 py-3 rounded">Become a Franchise Partner</a>
            </div>
        </div>
    </section>
    <section class="py-12 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div>
                    <div class="text-[#1E62A2] text-3xl mb-2">🌐</div>
                    <h3 class="font-semibold mb-2">Pan-India Presence</h3>
                    <p class="text-sm text-gray-600">Nationwide distribution network</p>
                </div>
                <div>
                    <div class="text-[#1E62A2] text-3xl mb-2">🏢</div>
                    <h3 class="font-semibold mb-2">10+ Years in Healthcare</h3>
                    <p class="text-sm text-gray-600">Decade of trusted service</p>
                </div>
                <div>
                    <div class="text-[#1E62A2] text-3xl mb-2">✅</div>
                    <h3 class="font-semibold mb-2">ISO & WHO-GMP Certified</h3>
                    <p class="text-sm text-gray-600">Quality assured manufacturing</p>
                </div>
                <div>
                    <div class="text-[#1E62A2] text-3xl mb-2">📦</div>
                    <h3 class="font-semibold mb-2">500+ Product SKUs</h3>
                    <p class="text-sm text-gray-600">Comprehensive product range</p>
                </div>
            </div>
        </div>
    </section>
</div>
@endsection
