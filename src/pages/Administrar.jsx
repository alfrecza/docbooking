import React, { useContext, useState } from 'react'
import Paciente from '../components/Paciente'
import { useLoaderData } from 'react-router-dom'
import { eliminarCliente, obtenerPacientes } from '../../data/pacientes'
import { ToastContainer, toast } from 'react-toastify'
import { MyContext } from '../main'

export async function loader() {
    const pacientes = obtenerPacientes()

    return pacientes
}


const Administrar = () => {

  const [pacientes, setPacientes] = useState(useLoaderData())

  const handleEliminar = async (id) => {
    await eliminarCliente(id)
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
    toast.success("Paciente eliminado correctamente")
  }

  return (
    <div className='container mx-auto pb-24'>
      <ToastContainer
      position="bottom-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition: Bounce
      />
        <h2 className='text-white uppercase font-bold text-center text-3xl opacity-85'>Panel de administrador</h2>
        {pacientes.length === 0 ? <p className='text-white text-center uppercase font-semibold text-xl mt-8'>Comienza por agregar tu primer paciente y comienza a administrarlos!</p> : ''}
        <div className="gap-y-5 items-center mt-16 grid grid-cols-2 gap-x-10">
            {pacientes.length && pacientes.map(paciente => <Paciente paciente={paciente} key={paciente.id} handleEliminar={handleEliminar}/>)}
        </div>
    </div>
  )
}

export default Administrar