<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

// Login route
Route::get('/', [AuthController::class, 'index'])->name('login');
Route::post('/authuser', [AuthController::class, 'AuthUser'])->name('authuser');
