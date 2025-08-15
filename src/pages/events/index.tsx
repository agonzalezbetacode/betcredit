'use client'

import DashboardLayout from '@/components/common/DashboardLayout'
import Link from 'next/link'
import React from 'react'

export default function EventList() {
    const eventos = Array.from({ length: 6 }).map((_, i) => ({
        id: i + 1,
        title: `Evento #${i + 1}`,
        description: 'Apuesta un número del 1 al 99',
        endsAt: 'Hoy 18:00',
    }))

    return (
        <DashboardLayout>
            <h1 className="text-2xl font-bold text-black mb-6">Eventos disponibles</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {eventos.map((evento) => (
                    <div
                        key={evento.id}
                        className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer flex flex-col justify-between"
                    >
                        <div>
                            <h2 className="font-semibold text-lg text-black">{evento.title}</h2>
                            <p className="text-gray-500 mt-1">{evento.description}</p>
                            <p className="text-gray-400 mt-2">Cierre: {evento.endsAt}</p>
                        </div>

                        <Link href={`/event/${evento.id}`} className="mt-4">
                            <button className="w-full bg-yellow-500 text-white font-semibold py-2 rounded-lg hover:bg-yellow-600 transition">
                                Apostar
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </DashboardLayout>
    )
}
