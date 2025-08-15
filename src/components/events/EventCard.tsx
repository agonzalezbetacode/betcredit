'use client'

import React from 'react'
import Link from 'next/link'

type EventProps = {
    id: string
    title: string
    description: string
    endsAt: string
}

export default function EventCard({ id, title, description, endsAt }: EventProps) {
    return (
        <div className="bg-[#0f0f0f] rounded-xl p-4 shadow-lg border border-yellow-600/20">
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-sm opacity-70">{description}</p>
            <div className="mt-3 text-xs opacity-60">
                Cierre: {endsAt}
            </div>

            <Link
                href={`/event/${id}`}
                className="mt-4 block text-center bg-yellow-500 text-black font-semibold rounded py-2 hover:bg-yellow-400 transition"
            >
                Apostar
            </Link>
        </div>
    )
}