"use client"

import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react"
import Navbar from "../common/Navbar"
import Footer from "../common/Footer"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "./context/Auth"


const Login = () => {

    const [, login] = useContext(AuthContext);

    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => { 
        // console.log(data) 

        const res = await fetch("http://127.0.0.1:8000/api/authenticate", {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })

        const result = await res.json()

        if (result.status == false){
            toast(result.message)
        } else {

            const userInfo= {
                id: result.id,
                token: result.token,
            }

            localStorage.setItem('userInfo', JSON.stringify(userInfo));
            login(userInfo);
            navigate('/admin/dashboard')
        }

    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-sky-50/30">
            <Navbar />

            <main className="pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
                        {/* Left Side - Branding */}
                        <div className="hidden lg:block">
                            <div className="relative">
                                <div className="bg-gradient-to-br from-sky-500 to-blue-600 rounded-3xl p-12 text-white relative overflow-hidden">
                                    {/* Background decoration */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
                                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>

                                    <div className="relative z-10">
                                        <div className="mb-8">
                                            <h1 className="text-4xl font-bold mb-4">
                                                Welcome Back to
                                                <span className="block text-sky-200">Amazing Constructions</span>
                                            </h1>
                                            <p className="text-sky-100 text-lg leading-relaxed">
                                                Access your project dashboard, track construction progress, and manage your account with our
                                                secure client portal.
                                            </p>
                                        </div>

                                        {/* Features */}
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </div>
                                                <span>Real-time project updates</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </div>
                                                <span>Document management</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </div>
                                                <span>Direct communication with team</span>
                                            </div>
                                        </div>

                                        {/* Stats */}
                                        <div className="grid grid-cols-2 gap-6 mt-12">
                                            <div>
                                                <div className="text-3xl font-bold">500+</div>
                                                <div className="text-sky-200 text-sm">Active Projects</div>
                                            </div>
                                            <div>
                                                <div className="text-3xl font-bold">98%</div>
                                                <div className="text-sky-200 text-sm">Client Satisfaction</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Login Form */}
                        <div className="w-full max-w-md mx-auto lg:mx-0">
                            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-200/50">
                                {/* Form Header */}
                                <div className="text-center mb-8">
                                    <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <Lock className="w-8 h-8 text-white" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Welcome Back</h2>
                                    <p className="text-slate-600">Sign in to access your construction dashboard</p>
                                </div>

                                {/* Login Form */}
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    {/* Email Field */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                                            Email Address
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Mail className="h-5 w-5 text-slate-400" />
                                            </div>
                                            <input
                                                {...register("email", {
                                                    required: "Email is required",
                                                    pattern: {
                                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                        message: "Invalid email address",
                                                    },
                                                })}
                                                type="email"
                                                id="email"
                                                className={`block w-full pl-10 pr-3 py-3 border rounded-xl shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors ${errors.email ? "border-red-300 bg-red-50" : "border-slate-300 bg-white"
                                                    }`}
                                                placeholder="Enter your email"
                                            />
                                        </div>
                                        {errors.email && (
                                            <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                {errors.email.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Password Field */}
                                    <div>
                                        <label htmlFor="password" className="block text-sm font-semibold text-slate-700 mb-2">
                                            Password
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Lock className="h-5 w-5 text-slate-400" />
                                            </div>
                                            <input
                                                {...register("password", {
                                                    required: "Password is required",
                                                    minLength: {
                                                        value: 6,
                                                        message: "Password must be at least 6 characters",
                                                    },
                                                })}
                                                type={showPassword ? "text" : "password"}
                                                id="password"
                                                className={`block w-full pl-10 pr-12 py-3 border rounded-xl shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors ${errors.password ? "border-red-300 bg-red-50" : "border-slate-300 bg-white"
                                                    }`}
                                                placeholder="Enter your password"
                                            />
                                            <button
                                                type="button"
                                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? (
                                                    <EyeOff className="h-5 w-5 text-slate-400 hover:text-slate-600" />
                                                ) : (
                                                    <Eye className="h-5 w-5 text-slate-400 hover:text-slate-600" />
                                                )}
                                            </button>
                                        </div>
                                        {errors.password && (
                                            <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                {errors.password.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Remember Me & Forgot Password */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <input
                                                {...register("rememberMe")}
                                                id="rememberMe"
                                                type="checkbox"
                                                className="h-4 w-4 text-sky-600 focus:ring-sky-500 border-slate-300 rounded"
                                            />
                                            <label htmlFor="rememberMe" className="ml-2 block text-sm text-slate-700">
                                                Remember me
                                            </label>
                                        </div>
                                        <a href="/forgot-password" className="text-sm text-sky-600 hover:text-sky-500 font-medium">
                                            Forgot password?
                                        </a>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="group w-full bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white py-3 px-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-sky-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                    >
                                        <span className="flex items-center justify-center gap-2">
                                            {isLoading ? (
                                                <>
                                                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                                                        <circle
                                                            className="opacity-25"
                                                            cx="12"
                                                            cy="12"
                                                            r="10"
                                                            stroke="currentColor"
                                                            strokeWidth="4"
                                                        ></circle>
                                                        <path
                                                            className="opacity-75"
                                                            fill="currentColor"
                                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                        ></path>
                                                    </svg>
                                                    Signing in...
                                                </>
                                            ) : (
                                                <>
                                                    Sign In
                                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </span>
                                    </button>
                                </form>

                                {/* Sign Up Link */}
                                <div className="mt-8 text-center">
                                    <p className="text-slate-600">
                                        Don't have an account?{" "}
                                        <a href="/signup" className="text-sky-600 hover:text-sky-500 font-semibold">
                                            Create one here
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default Login
