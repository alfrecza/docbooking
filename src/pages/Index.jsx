import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import imagenRecepcionista from "../assets/receptionist.png"
import Comentarios from '../components/Comentarios';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Index = () => {
  return (
    <>
        <main>
            <section className=' flex container mx-auto items-center justify-around mt-13'>
                <div className='w-1/2'>
                    <h1 className='text-white uppercase font-bold text-5xl mb-2'>
                        DOCBOOKING
                    </h1>
                    <h2 className='text-2xl uppercase text-white font-semibold opacity-80'>Administra y gestiona los turnos de tus pacientes</h2>
                    <div className='mt-12 flex gap-x-8'>
                        <Link to={"/agregar/paciente"} className='bg-indigo-700 hover:bg-indigo-600 p-4 rounded-md text-white uppercase font-semibold'>Agrega un paciente</Link>
                        <Link to={"/administrar/pacientes"} className='bg-purple-800 hover:bg-purple-700 p-4 rounded-md text-white uppercase font-semibold'>Ve al panel de administrador</Link>
                    </div>
                </div>
                <img className='w-1/2' src={imagenRecepcionista} alt="imagen receptionista" />
            </section>
            <section className='flex mt-12 gap-x-9 container mx-auto  py-8'>
                <div className='w-1/3 text-center flex flex-col text-white opacity-80 items-center'>
                    <h3 className='font-semibold uppercase text-xl flex items-center gap-2'>Agregar pacientes <FaCheckCircle/> </h3>
                    <p className='mt-1 text-lg'>En la seccion "Agregar paciente" tienes disponible un panel para realizarlo</p>
                </div>
                <div className='w-1/3 text-center flex flex-col text-white opacity-80 items-center border-r-2 border-l-2 border-purple-800 px-5'>
                    <h3 className='font-semibold uppercase text-xl flex items-center gap-2'>Borrar y Editar <FaCheckCircle/></h3>
                    <p className='mt-1 text-lg'>Tambien dispones con la funcionalidad de borrar y editar en la seccion "administrar"</p>
                </div>
                <div className='w-1/3 text-center flex flex-col text-white opacity-80 items-center'>
                    <h3 className='font-semibold uppercase text-xl flex items-center gap-2'>Facil de usar <FaCheckCircle/></h3>
                    <p className='mt-1 text-lg'>Todo el proyecto esta realizado de una forma para que su uso sea intuitivo</p>
                </div>
            </section>
            <section className='container mx-auto mt-32 py-8'>
                <h2 className='text-3xl uppercase font-bold text-white opacity-80 mb-12 text-center '>Comentarios</h2>
                <Comentarios/>
            </section>
        </main>
    </>
    
  )
}

export default Index