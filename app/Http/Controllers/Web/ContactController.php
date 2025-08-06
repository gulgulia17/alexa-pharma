<?php

namespace App\Http\Controllers\Web;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\ContactRequest;
use App\Enums\ContactRequestType;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function index()
    {
        return Inertia::render('web/contact');
    }

    public function store(Request $request)
    {
        $validated = Validator::make($request->all(), [
            'name'    => 'required|string|max:255',
            'email'   => 'required|email|max:255',
            'phone'   => 'nullable|string|max:20',
            'subject' => 'nullable|string|max:255',
            'message' => 'required|string|max:2000',
        ])->validate();

        ContactRequest::create([
            ...$validated,
            'type' => ContactRequestType::Contact,
        ]);

        return redirect()->back()->with('success', 'Message sent successfully!');
    }
}
