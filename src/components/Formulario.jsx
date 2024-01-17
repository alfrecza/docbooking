


const Formulario = ({paciente}) => {

    return (
        <>
            <div className="mb-4 w-full sm:w-3/4 md:w-2/4">
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
                    defaultValue={paciente?.nombre}
                />
            </div>
            <div className="mb-4 w-full sm:w-3/4 md:w-2/4">
                <label
                    className="text-white font-semibold text-lg"
                    htmlFor="obraSocial"
                >Obra Social:</label>
                <input 
                    id="obraSocial"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50 outline-none"
                    placeholder="Obra social que posee el paciente"
                    name="obraSocial"
                    defaultValue={paciente?.obraSocial}
                />
            </div>

            <div className="mb-4 w-full sm:w-3/4 md:w-2/4">
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
                    defaultValue={paciente?.email}
                />
            </div>

            <div className="mb-4 w-full sm:w-3/4 md:w-2/4">
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
                    defaultValue={paciente?.telefono}
                />
            </div>

            <div className="mb-4 w-full sm:w-3/4 md:w-2/4">
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
                    defaultValue={paciente?.sintomas}
                />
            </div>
        </>
    )
}

export default Formulario