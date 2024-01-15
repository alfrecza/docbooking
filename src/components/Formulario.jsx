


const Formulario = () => {
    return (
        <>
            <div className="mb-4 w-2/4">
                <label
                    className="text-white font-semibold text-lg"
                    htmlFor="nombre"
                >Nombre:</label>
                <input 
                    id="nombre"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50 outline-none"
                    placeholder="Nombre del Paciente"
                    name="nombre"
                />
            </div>
            <div className="mb-4 w-2/4">
                <label
                    className="text-white font-semibold text-lg"
                    htmlFor="obraSocial"
                >Obra Social:</label>
                <input 
                    id="obraSocial"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50 outline-none"
                    placeholder="Obra social que posee el cliente"
                    name="obraSocial"

                />
            </div>

            <div className="mb-4 w-2/4">
                <label
                    className="text-white font-semibold text-lg"
                    htmlFor="email"
                >E-mail:</label>
                <input 
                    id="email"
                    type="email"
                    className="mt-2 block w-full p-3 bg-gray-50 outline-none"
                    placeholder="Email del Paciente"
                    name="email"

                />
            </div>

            <div className="mb-4 w-2/4">
                <label
                    className="text-white font-semibold text-lg"
                    htmlFor="telefono"
                >Teléfono:</label>
                <input 
                    id="telefono"
                    type="tel"
                    className="mt-2 block w-full p-3 bg-gray-50 outline-none"
                    placeholder="Teléfono del Paciente"
                    name="telefono"

                />
            </div>

            <div className="mb-4 w-2/4">
                <label
                    className="text-white font-semibold text-lg"
                    htmlFor="sintomas"
                >Sintomas:</label>
                <textarea
                    as="textarea"
                    id="sintomas"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self outline-none"
                    placeholder="Sintomas del paciente"
                    name="sintomas"

                />
            </div>
        </>
    )
}

export default Formulario