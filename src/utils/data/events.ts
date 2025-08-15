export const events = [
    {
        id: 'ev-ruleta-1',
        title: 'Ruleta diaria',
        description: 'Elige un número del 1 al 99. Sorteo diario a las 20:00.',
        endsAt: new Date(Date.now() + 1000 * 60 * 60 * 12).toISOString(),
    },
    {
        id: 'ev-super-1',
        title: 'Súper apuesta',
        description: 'Gana un gran bote si aciertas el número exacto.',
        endsAt: new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString(),
    },
    {
        id: 'ev-rapida-1',
        title: 'Apuesta rápida',
        description: 'Resultados cada hora. ¡No te la pierdas!',
        endsAt: new Date(Date.now() + 1000 * 60 * 60).toISOString(),
    },
]