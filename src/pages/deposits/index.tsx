import DashboardLayout from "@/components/common/DashboardLayout"

export default function DepositosPage() {
    const historial = Array.from({ length: 5 }).map((_, i) => ({
        id: i + 1,
        tipo: i % 2 === 0 ? 'Depósito' : 'Retiro',
        monto: (i + 1) * 100,
        fecha: `2025-08-${10 + i}`,
    }))

    return (
        <DashboardLayout>
            <h1 className="text-2xl font-bold text-black mb-6">Depósitos y Retiros</h1>

            <div className="flex flex-col lg:flex-row gap-6">
                {/* Simulación de ingreso de tarjeta */}
                <div className="flex-1 p-6 bg-white rounded-xl shadow">
                    <h2 className="font-semibold text-lg text-black mb-4">Agregar créditos</h2>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Número de tarjeta"
                            className="w-full border border-gray-300 rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                        <input
                            type="text"
                            placeholder="Nombre del titular"
                            className="w-full border border-gray-300 rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                        <input
                            type="text"
                            placeholder="MM/AA"
                            className="w-full border border-gray-300 rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                        <input
                            type="text"
                            placeholder="CVV"
                            className="w-full border border-gray-300 rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                        <button
                            type="button"
                            className="w-full py-2 bg-yellow-500 text-white rounded-md font-semibold hover:bg-yellow-600 transition"
                        >
                            Agregar Créditos
                        </button>
                    </form>
                </div>

                {/* Historial */}
                <div className="flex-1 p-6 bg-white rounded-xl shadow">
                    <h2 className="font-semibold text-lg text-black mb-4">Historial de Créditos</h2>
                    <ul className="space-y-3">
                        {historial.map((item) => (
                            <li
                                key={item.id}
                                className="p-3 border border-gray-200 rounded-md flex justify-between items-center text-gray-500"
                            >
                                <span>{item.tipo}</span>
                                <span className="font-semibold text-black">{item.monto} créditos</span>
                                <span className="text-gray-400 text-xs">{item.fecha}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </DashboardLayout>
    )
}