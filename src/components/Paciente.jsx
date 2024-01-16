import React from 'react'
import {useNavigate} from "react-router-dom"
import { useContext } from 'react'
import { MyContext } from '../main'

const Paciente = ({paciente, handleEliminar}) => {

  const navegate = useNavigate()

  const {nombre, obraSocial, email, telefono, sintomas, id} = paciente

  return (
    <div className='bg-purple-300 bg-opacity-20 text-white pl-8 py-5 w-full border-l-4 border-purple-700'>
        <p className='font-semibold mb-2 text-lg'>Nombre: <span className='font-normal'>{nombre}</span></p>
        <p className='font-semibold mb-2 text-lg'>Obra Social: <span className='font-normal'>{obraSocial}</span></p>
        <p className='font-semibold mb-2 text-lg'>Email: <span className='font-normal'>{email}</span></p>
        <p className='font-semibold mb-2 text-lg'>Numero de celular: <span className='font-normal'>{telefono}</span></p>
        <p className='font-semibold mb-2 text-lg'>Sintomas: <span className='font-normal'>{sintomas}</span></p>
        <div className='flex gap-x-6 mt-6'>
          <button className='py-2 px-6 bg-red-600 text-lg font-semibold rounded-md hover:bg-red-500' type='button' onClick={() =>{
            handleEliminar(id)
          }}>Eliminar</button>
          <button className='py-2 px-6 bg-purple-600 text-lg font-semibold rounded-md hover:bg-purple-500' onClick={() => navegate(`/pacientes/${id}/editar`)} type='button'>Editar</button>
        </div>
    </div>
  )
}

export default Paciente