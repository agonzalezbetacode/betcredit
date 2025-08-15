'use client'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function LoginPage() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => setLoading(false), 1000) // Simulación de login
        router.push('/events')
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                    Bienvenido a <span className="text-yellow-500">betcredit</span>
                </h1>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none text-black"
                            placeholder="usuario@email.com"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none text-black"
                            placeholder="********"
                            required
                        />
                    </div>

                    {/* Botón */}
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-3 rounded-xl text-white font-semibold transition-colors ${loading ? 'bg-yellow-300 cursor-not-allowed' : 'bg-yellow-500 hover:bg-yellow-600'
                            }`}
                    >
                        {loading ? 'Ingresando...' : 'Iniciar Sesión'}
                    </button>
                </form>

                <p className="mt-6 text-sm text-gray-500 text-center">
                    ¿No tienes cuenta? <span className="text-yellow-500 font-semibold">Regístrate</span>
                </p>
            </div>
        </div>
    )
}
