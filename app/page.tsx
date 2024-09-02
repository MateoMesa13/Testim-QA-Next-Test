"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simular validación en el backend
    if (email === "test@example.com" && password === "password") {
      router.push("/success");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex flex-col justify-center items-center p-12 shadow-lg rounded">
        <h1 className="font-bold text-3xl mb-4">Inicia Sesión</h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4 p-2 border border-gray-300 rounded"
            required
          />
          <button type="submit" className="p-2 bg-blue-500 text-white rounded">
            Iniciar sesión
          </button>
        </form>
      </div>
    </main>
  );
}
