import DashboardLayout from "@/components/common/DashboardLayout"

export default function ApuestasPage() {
    const apuestas = Array.from({ length: 4 }).map((_, i) => ({
        id: i + 1,
        evento: `Evento #${i + 1}`,
        numero: Math.floor(Math.random() * 99) + 1,
        creditosApostados: (i + 1) * 50,
        estado: i % 2 === 0 ? 'Ganada' : 'Pendiente',
    }))

    return (
        <DashboardLayout>
            <h1 className="text-2xl font-bold text-black mb-6">Mis Apuestas</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {apuestas.map((apuesta) => (
                    <div
                        key={apuesta.id}
                        className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition"
                    >
                        <h2 className="font-semibold text-lg text-black">{apuesta.evento}</h2>
                        <p className="text-gray-500 mt-1">Número apostado: {apuesta.numero}</p>
                        <p className="text-gray-500">Créditos: {apuesta.creditosApostados}</p>
                        <span
                            className={`mt-2 inline-block px-2 py-1 text-xs rounded ${apuesta.estado === 'Ganada'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                                }`}
                        >
                            {apuesta.estado}
                        </span>
                    </div>
                ))}
            </div>
        </DashboardLayout>
    )
}