'use client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { DateTime } from 'luxon'

export default function SignupPage() {
    const router = useRouter()
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')
    const [direccion, setDireccion] = useState('')
    const [genero, setGenero] = useState('')
    const [fechaNacimiento, setFechaNacimiento] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    // Validaciones
    const validarEmail = (email: string) =>
        /^\S+@\S+\.\S+$/.test(email)

    const validarTelefono = (tel: string) =>
        /^\+1\d{10}$/.test(tel) // +1 seguido de 10 dígitos

    const validarEdad = (fecha: string) => {
        const hoy = DateTime.now()
        const nacimiento = DateTime.fromISO(fecha)
        return hoy.diff(nacimiento, 'years').years >= 18
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        // Validaciones
        if (!nombre || !apellido || !telefono || !email || !direccion || !genero || !fechaNacimiento) {
            setError('Por favor completa todos los campos.')
            return
        }

        if (!validarTelefono(telefono)) {
            setError('Ingresa un teléfono válido (ej: +11234567890)')
            return
        }

        if (!validarEmail(email)) {
            setError('Correo electrónico no válido')
            return
        }

        if (!validarEdad(fechaNacimiento)) {
            setError('Debes ser mayor de 18 años para registrarte')
            return
        }

        // Simulación de registro
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            router.push('/events') // Redirige al home
        }, 1000)
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                    Regístrate en <span className="text-yellow-500">betcredit</span>
                </h1>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Nombre */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                        <input
                            type="text"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none text-black"
                            placeholder="Tu nombre"
                            required
                        />
                    </div>

                    {/* Apellido */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Apellido</label>
                        <input
                            type="text"
                            value={apellido}
                            onChange={(e) => setApellido(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none text-black"
                            placeholder="Tu apellido"
                            required
                        />
                    </div>

                    {/* Teléfono */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono (+1)</label>
                        <input
                            type="tel"
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none text-black"
                            placeholder="+11234567890"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none text-black"
                            placeholder="usuario@email.com"
                            required
                        />
                    </div>

                    {/* Dirección */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Dirección de vivienda</label>
                        <input
                            type="text"
                            value={direccion}
                            onChange={(e) => setDireccion(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none text-black"
                            placeholder="Calle, número, ciudad"
                            required
                        />
                    </div>

                    {/* Género */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Género</label>
                        <select
                            value={genero}
                            onChange={(e) => setGenero(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none text-black"
                            required
                        >
                            <option value="">Selecciona</option>
                            <option value="M">Masculino</option>
                            <option value="F">Femenino</option>
                        </select>
                    </div>

                    {/* Fecha de nacimiento */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de nacimiento</label>
                        <input
                            type="date"
                            value={fechaNacimiento}
                            onChange={(e) => setFechaNacimiento(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none text-black"
                            required
                        />
                    </div>

                    {/* Error */}
                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    {/* Botón */}
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-3 rounded-xl text-white font-semibold transition-colors ${loading ? 'bg-yellow-300 cursor-not-allowed' : 'bg-yellow-500 hover:bg-yellow-600'
                            }`}
                    >
                        {loading ? 'Registrando...' : 'Registrarse'}
                    </button>
                </form>

                <p className="mt-6 text-sm text-gray-500 text-center">
                    ¿Ya tienes cuenta?{' '}
                    <span
                        onClick={() => router.push('/login')}
                        className="text-yellow-500 font-semibold cursor-pointer"
                    >
                        Inicia sesión
                    </span>
                </p>
            </div>
        </div>
    )
}
