'use client'
import { ReactNode } from 'react'
import Navbar from './Navbar'

interface DashboardLayoutProps {
    children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
            <Navbar />

            {/* Main content */}
            <main className="p-6 max-w-7xl mx-auto">{children}</main>
        </div>
    )
}
