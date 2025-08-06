<?php

namespace App\Http\Controllers\Web;

use Inertia\Inertia;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use App\Models\ContactRequest;
use App\Enums\ContactRequestType;
use App\Http\Controllers\Controller;

class OpportunityController extends Controller
{
    public function index()
    {
        return Inertia::render('web/opportunity', [
            'testimonials' => Testimonial::where('is_featured', 1)->get(),
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'city' => 'required|string|max:255',
            'state' => 'required|string|max:255',
            'experience' => 'nullable|string|max:50',
            'message' => 'nullable|string|max:2000',
        ]);

        ContactRequest::create([
            ...$data,
            'type' => ContactRequestType::Opportunity,
        ]);

        return redirect()->back()->with('success', 'Inquiry submitted successfully!');
    }
}
