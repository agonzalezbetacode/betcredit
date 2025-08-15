'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Calendar, Activity, CreditCard, User, Wallet } from 'lucide-react'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const pathname = usePathname()

    const userName = 'Juan'
    const userCredits = 1200

    const tabs = [
        { label: 'Eventos', href: '/events', icon: Calendar },
        { label: 'Mis Apuestas', href: '/bets', icon: Activity },
        { label: 'Depósito y Créditos', href: '/deposits', icon: CreditCard },
    ]

    return (
        <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 md:px-0">
                {/* Mobile Hamburger */}
                <button
                    className="md:hidden mr-4 focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6 text-black"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                    >
                        {menuOpen ? (
                            <path d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path d="M3 12h18M3 6h18M3 18h18" />
                        )}
                    </svg>
                </button>

                {/* Logo */}
                <div className="text-2xl font-bold tracking-wide flex-1 md:flex-none">
                    <Link href="/" className='text-black'>betcredit</Link>
                </div>

                {/* Tabs desktop */}
                <div className="hidden md:flex flex-1 justify-center gap-8">
                    {tabs.map(({ label, href, icon: Icon }) => {
                        const isActive = pathname === href
                        return (
                            <Link key={href} href={href} className="relative px-3 py-2 flex items-center gap-2">
                                <Icon className={`w-5 h-5 ${isActive ? 'text-yellow-500' : 'text-black'}`} />
                                <span className={`text-black font-medium`}>{label}</span>
                                <span
                                    className={`absolute bottom-0 left-0 w-full h-1 rounded-full transition-all ${isActive ? 'bg-yellow-500' : 'bg-transparent'}`}
                                />
                            </Link>
                        )
                    })}
                </div>

                {/* User info desktop */}
                <div className="hidden md:flex items-center space-x-4">
                    {/* User */}
                    <div className="flex items-center gap-2">
                        <User className="w-5 h-5 text-black" />
                        <span className='text-black'>Hola, <span className="font-semibold text-black">{userName}</span></span>
                    </div>

                    {/* Credits chip */}
                    <div className="flex items-center gap-2 bg-yellow-500 text-white px-3 py-1 rounded-full font-semibold">
                        <Wallet className="w-5 h-5" />
                        {userCredits}
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden mt-4 bg-white border-t border-gray-200 rounded-b p-4 space-y-4">
                    {tabs.map(({ label, href, icon: Icon }) => {
                        const isActive = pathname === href
                        return (
                            <Link
                                key={href}
                                href={href}
                                className={`block text-lg text-center px-3 py-2 relative flex items-center justify-center gap-2`}
                                onClick={() => setMenuOpen(false)}
                            >
                                <Icon className={`w-5 h-5 ${isActive ? 'text-yellow-500' : 'text-black'}`} />
                                <span className={`font-medium ${isActive ? 'text-yellow-500' : 'text-black'}`}>
                                    {label}
                                </span>
                                <span
                                    className={`absolute bottom-0 left-0 w-full h-1 rounded-full transition-all ${isActive ? 'bg-yellow-500' : 'bg-transparent'}`}
                                />
                            </Link>
                        )
                    })}

                    <div className="mt-4 border-t border-gray-200 pt-4 flex flex-col items-center gap-2">
                        <div className="flex items-center gap-2">
                            <User className="w-5 h-5 text-black" />
                            <span className='text-black'>Hola, <span className="font-semibold text-black">{userName}</span></span>
                        </div>
                        <div className="flex items-center gap-2 bg-yellow-500 text-white px-3 py-1 rounded-full font-semibold">
                            <Wallet className="w-5 h-5" />
                            {userCredits}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}
