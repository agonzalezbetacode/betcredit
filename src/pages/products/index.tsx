'use client'

import DashboardLayout from '@/components/common/DashboardLayout'
import { useState } from 'react'

interface Product {
    id: number
    nombre: string
    descripcion: string
    precio: number
    imagen: string
}

export default function ShopPage() {
    const [carrito, setCarrito] = useState<Product[]>([])
    const [openCarrito, setOpenCarrito] = useState(false)

    const productos: Product[] = [
        { id: 5, nombre: 'Mancuernas', descripcion: 'Mancuernas ajustables para tu entrenamiento', precio: 500, imagen: 'https://acdn-us.mitiendanube.com/stores/919/712/products/par-de-mancuernas-hexagonales-odea-1-kg-11-ca6a63f274c44931d516662918802019-1024-1024.png', }, { id: 6, nombre: 'Balón de Fútbol', descripcion: 'Balón profesional para tus partidos', precio: 300, imagen: 'https://assets.newatlas.com/dims4/default/17e8cc8/2147483647/strip/true/crop/620x413+0+0/resize/1200x800!/format/webp/quality/90/?url=https%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fjabulani.jpg', }, { id: 7, nombre: 'Sudadera', descripcion: 'Sudadera cómoda para entrenar o descansar', precio: 400, imagen: 'https://images.footballfanatics.com/chelsea/chelsea-nike-club-hoodie-blue_ss5_p-201095825+u-ln4moiomrchjelhblyd3+v-xpx5tmespbr5tzrddkqv.jpg?_hv=2', }, { id: 8, nombre: 'Short Deportivo', descripcion: 'Short liviano para cualquier actividad', precio: 180, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRszvtfncEhWYX7NNOODwsTPMiE8qwkIT_cOQ&s', }, { id: 9, nombre: 'Auriculares', descripcion: 'Auriculares para escuchar música mientras entrenas', precio: 350, imagen: 'https://lacasadelascarcasas.es/img/cms/deportivos-auri.jpg', },
    ]

    const agregarAlCarrito = (producto: Product) => {
        if (!carrito.find((p) => p.id === producto.id)) {
            setCarrito([...carrito, producto])
        }
    }

    const eliminarDelCarrito = (id: number) => {
        setCarrito(carrito.filter((p) => p.id !== id))
    }

    return (
        <DashboardLayout>
            <div className="relative min-h-screen bg-gray-50 p-6">
                {/* Indicador flotante abajo a la derecha */}
                <div
                    onClick={() => setOpenCarrito(!openCarrito)}
                    className="fixed bottom-6 right-6 bg-yellow-500 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg text-lg font-bold z-50 cursor-pointer"
                >
                    {carrito.length}
                </div>

                {/* Dropdown del carrito */}
                {openCarrito && (
                    <div className="fixed bottom-20 right-6 w-80 max-h-96 overflow-y-auto bg-white shadow-xl rounded-2xl z-50 p-4">
                        <h2 className="text-lg font-semibold text-black mb-4">Carrito</h2>
                        {carrito.length === 0 ? (
                            <p className="text-gray-500">No hay productos en el carrito.</p>
                        ) : (
                            carrito.map((prod) => (
                                <div key={prod.id} className="flex items-center mb-4">
                                    <picture>
                                        <img
                                            src={prod.imagen} alt={prod.nombre} className="w-16 h-16 object-cover rounded-lg mr-4" />
                                    </picture>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-black">{prod.nombre}</h3>
                                        <p className="text-gray-500 text-sm">{prod.precio} créditos</p>
                                    </div>
                                    <button
                                        onClick={() => eliminarDelCarrito(prod.id)}
                                        className="ml-2 bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600 transition text-sm"
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                )}

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-4">
                    {productos.map((prod) => (
                        <div
                            key={prod.id}
                            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
                        >
                            <picture>
                                <img
                                    src={prod.imagen}
                                    alt={prod.nombre}
                                    className="w-full h-48 object-cover"
                                />
                            </picture>
                            <div className="p-4 flex-1 flex flex-col">
                                <h2 className="text-lg font-semibold text-black mb-2">{prod.nombre}</h2>
                                <p className="text-gray-500 text-sm mb-4 flex-1">{prod.descripcion}</p>
                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-yellow-500 font-bold">{prod.precio} créditos</span>
                                    <button
                                        onClick={() => agregarAlCarrito(prod)}
                                        className="bg-yellow-500 text-white px-4 py-2 rounded-xl hover:bg-yellow-600 transition"
                                    >
                                        {carrito.find((p) => p.id === prod.id) ? 'Agregado' : 'Agregar'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    )
}
