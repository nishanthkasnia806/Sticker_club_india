"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      router.push("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm shadow-neon-pink">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Welcome <span className="text-neon-pink">Back</span></h2>
        <form onSubmit={handleSubmit} className="space-y-4">
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
          <button type="submit" className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-neon-pink hover:text-white hover:shadow-neon-pink transition-all">
            Login
          </button>
        </form>
        <p className="text-center text-gray-400 mt-6">
          New here? <Link href="/signup" className="text-white hover:text-neon-pink transition-colors">Create an account</Link>
        </p>
      </div>
    </div>
  );
}