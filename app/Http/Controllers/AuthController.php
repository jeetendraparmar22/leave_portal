<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    // Login page
    public function index()
    {
        return view('frontend.login');
    }

    // Auth user
    public function AuthUser(Request $request)
    {
        // Validation of login page
        $request->validate([
            "username" => "required",
            "password" => "required",
        ]);
        // return "login successfully";
    }
}
