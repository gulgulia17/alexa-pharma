@extends('layout')

@section('title', 'About Alexa Biopharma')

@section('content')
<div class="min-h-screen bg-white">
    <section class="relative bg-gradient-to-br from-[#1E62A2] via-[#37A7DF] to-[#91C2E5] text-white py-20">
        <div class="absolute inset-0 bg-black/10"></div>
        <div class="relative container mx-auto px-4 text-center">
            <div class="mb-8">
                <img src="/logo-only.png" alt="Alexa Biopharma" width="300" height="120" class="h-16 w-auto object-contain mx-auto bg-white" />
            </div>
            <h1 class="text-4xl lg:text-6xl font-bold mb-6 font-['Poppins']">Dedicated to High-Quality, Affordable Healthcare</h1>
            <p class="text-xl lg:text-2xl mb-8 opacity-90">ISO 9001:2015 Certified | WHO-GMP Facilities</p>
        </div>
    </section>
    <section class="py-16">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl lg:text-4xl font-bold text-[#1E62A2] mb-6 font-['Poppins']">Who We Are</h2>
            <p class="text-gray-700 mb-6 leading-relaxed">
                Alexa Biopharma Pvt. Ltd. is a trusted name in the Indian pharmaceutical industry, headquartered in Gujarat with a strong national presence.
            </p>
            <p class="text-gray-700 mb-6 leading-relaxed">
                Our commitment to quality and innovation drives us to continuously expand our product portfolio and strengthen our distribution network across India.
            </p>
            <div class="flex flex-wrap gap-4">
                <span class="bg-[#1E62A2] text-white px-4 py-2 rounded">10+ Years Experience</span>
                <span class="bg-[#37A7DF] text-white px-4 py-2 rounded">Pan-India Presence</span>
                <span class="bg-[#91C2E5] text-white px-4 py-2 rounded">500+ Products</span>
            </div>
        </div>
    </section>
</div>
@endsection
