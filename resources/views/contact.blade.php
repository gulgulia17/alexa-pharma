@extends('layout')

@section('title', 'Contact Alexa Biopharma')

@section('content')
<div class="min-h-screen bg-white">
    <section class="relative bg-gradient-to-br from-[#1E62A2] via-[#37A7DF] to-[#91C2E5] text-white py-20">
        <div class="absolute inset-0 bg-black/10"></div>
        <div class="relative container mx-auto px-4 text-center">
            <div class="mb-8">
                <img src="/logo-only.png" alt="Alexa Biopharma" width="250" height="100" class="h-16 w-auto object-contain mx-auto bg-white" />
            </div>
            <h1 class="text-4xl lg:text-6xl font-bold mb-6 font-['Poppins']">Get in Touch</h1>
            <p class="text-xl lg:text-2xl mb-8 opacity-90">We're here to help you grow your pharmaceutical business</p>
        </div>
    </section>
    <section class="py-16">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 text-center">
                <div>
                    <div class="text-[#1E62A2] text-3xl mb-4">☎</div>
                    <h3 class="font-semibold mb-2">Call Us</h3>
                    <p class="text-gray-600 mb-2">+91 9173636128</p>
                </div>
                <div>
                    <div class="text-[#1E62A2] text-3xl mb-4">✉</div>
                    <h3 class="font-semibold mb-2">Email Us</h3>
                    <p class="text-gray-600 mb-2">alexaindia121@gmail.com</p>
                </div>
                <div>
                    <div class="text-[#1E62A2] text-3xl mb-4">📍</div>
                    <h3 class="font-semibold mb-2">Head Office</h3>
                    <p class="text-gray-600 mb-2">Gujarat, India</p>
                </div>
                <div>
                    <div class="text-[#1E62A2] text-3xl mb-4">⏰</div>
                    <h3 class="font-semibold mb-2">Business Hours</h3>
                    <p class="text-gray-600 mb-2">Mon - Sat</p>
                </div>
            </div>
        </div>
    </section>
</div>
@endsection
