

export async function agregarPaciente(datos) {

    try {
        const respuesta = await fetch(import.meta.env.VITE_API_URL, 
            {method: 'POST', 
            body: JSON.stringify(datos),
            headers: {'Content-Type' : 'application/json'}})
            await respuesta.json()
    } catch (error) {

    }
}