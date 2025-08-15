import './globals.css'
import React from 'react'

export const metadata = { title: 'Betting MVP', description: 'MVP de apuestas' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es">
            <body>
                <div className="min-h-screen flex flex-col">
                    <header className="bg-gradient-to-r from-[#0f172a] via-[#2b2b2b] to-[#111827] shadow-lg p-4">
                        <div className="container mx-auto flex items-center justify-between">
                            <h1 className="text-2xl font-extrabold tracking-wide">🎰 Casino MVP</h1>
                            <div className="text-sm opacity-80">Next.js · MVP local</div>
                        </div>
                    </header>

                    <main className="flex-1 container mx-auto p-4">{children}</main>

                    <footer className="p-4 text-center text-sm opacity-70">MVP - Demo local</footer>
                </div>
            </body>
        </html>
    )
}
