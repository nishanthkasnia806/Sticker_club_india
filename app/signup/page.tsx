"use client";
import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) alert("Account created! Please log in.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm shadow-neon-pink">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Join the <span className="text-neon-pink">Club</span></h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" placeholder="Name" required 
            className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white focus:border-neon-pink outline-none"
            onChange={(e) => setFormData({...formData, name: e.target.value})} 
          />
          <input 
            type="email" placeholder="Email" required 
            className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white focus:border-neon-pink outline-none"
            onChange={(e) => setFormData({...formData, email: e.target.value})} 
          />
          <input 
            type="password" placeholder="Password" required 
            className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 text-white focus:border-neon-pink outline-none"
            onChange={(e) => setFormData({...formData, password: e.target.value})} 
          />
          <button type="submit" className="w-full bg-neon-pink text-black font-bold py-3 rounded-lg hover:shadow-neon-pink transition-all">
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-400 mt-6">
          Already have an account? <Link href="/login" className="text-neon-pink hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
}