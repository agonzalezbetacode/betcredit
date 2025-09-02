'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/common/Navbar'
import { DateTime } from 'luxon'

export default function EventDetail() {
    const [numero, setNumero] = useState<number | string>(0)
    const [creditos, setCreditos] = useState('')
    const [error, setError] = useState('')
    const [userCredits] = useState(1200) // Monedero de ejemplo
    const [cierreLocal, setCierreLocal] = useState('')

    // Hora de cierre en Colorado (America/Denver)
    const cierreColorado = '2025-08-15T18:00:00'
    const coloradoTZ = 'America/Denver'

    // Convertir a hora local del usuario
    useEffect(() => {
        const cierreDateTime = DateTime.fromISO(cierreColorado, { zone: coloradoTZ })
        const localTZ = Intl.DateTimeFormat().resolvedOptions().timeZone
        const localDateTime = cierreDateTime.setZone(localTZ)
        setCierreLocal(localDateTime.toFormat('dd LLL yyyy - hh:mm a'))
    }, [])

    const handleApostar = () => {
        setError('')

        // Hora actual y hora de cierre
        const cierreDateTime = DateTime.fromISO(cierreColorado, { zone: coloradoTZ })
        if (DateTime.now() > cierreDateTime) {
            setError('El tiempo de apuestas ha cerrado.')
            return
        }

        if (!numero || !creditos) {
            setError('Por favor completa todos los campos.')
            return
        }

        const creditosNum = parseInt(creditos)

        if (creditosNum > userCredits) {
            setError(`No puedes apostar más de ${userCredits} créditos.`)
            return
        }

        if (creditosNum <= 0) {
            setError('Debes apostar al menos 1 crédito.')
            return
        }

        alert(`✅ Apostaste ${creditosNum} créditos al número ${numero}`)
    }

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50 flex justify-center items-start p-6">
                <div className="w-full md:w-1/2 mx-auto mt-10 p-6 bg-white rounded-2xl shadow-sm">
                    <div className="self-start mb-4">
                        <button
                            onClick={() => window.history.back()}
                            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition"
                        >
                            <svg
                                className="w-5 h-5 mr-1"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 24 24"
                            >
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                            Regresar
                        </button>
                    </div>

                    {/* Header */}
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Evento Especial</h1>
                    <p className="text-gray-500 mb-1">¡Apuesta a tu número de la suerte!</p>
                    <p className="text-gray-400 mb-6 text-sm">
                        Cierre de apuestas en tu hora local: {cierreLocal}
                    </p>

                    {/* Monedero */}
                    <div className="mb-6">
                        <span className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full font-semibold text-sm">
                            💰 {userCredits} créditos disponibles
                        </span>
                    </div>

                    {/* Formulario */}
                    <div className="space-y-4">
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">
                                Número de la suerte
                            </label>
                            <input
                                type="number"
                                min={0}
                                max={100}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition"
                                value={numero}
                                onChange={(e) => {
                                    const value = e.target.value
                                    if (value === '') {
                                        setNumero('')
                                        return
                                    }
                                    const num = Number(value)
                                    if (num >= 0 && num <= 100) {
                                        setNumero(num)
                                    }
                                }}
                                placeholder="Ingresa un número"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium mb-1">
                                Créditos a apostar
                            </label>
                            <input
                                type="number"
                                min={1}
                                max={userCredits}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition"
                                value={creditos}
                                onChange={(e) => {
                                    const val = e.target.value

                                    // Permitir borrar
                                    if (val === '') {
                                        setCreditos('')
                                        return
                                    }

                                    const num = parseInt(val)

                                    // Limitar automáticamente al máximo
                                    if (num > userCredits) {
                                        setCreditos(userCredits.toString())
                                    } else if (num < 0) {
                                        setCreditos('0')
                                    } else {
                                        setCreditos(val)
                                    }
                                }}
                                placeholder={`Máx: ${userCredits}`}
                            />
                        </div>

                        {error && <p className="text-red-500 text-sm">{error}</p>}

                        <button
                            onClick={handleApostar}
                            className="w-full bg-yellow-500 text-white font-semibold py-2 rounded-lg hover:bg-yellow-600 transition"
                        >
                            Apostar
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
