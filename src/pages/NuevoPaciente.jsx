import Formulario from '../components/Formulario'
import { agregarPaciente } from '../../data/pacientes'
import {Form, redirect, useActionData} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';



export async function action ({request}) {
  const formData = await request.formData()
  const datos = Object.fromEntries(formData)
  let errores = []

  if(Object.values(datos).includes("")) {
    errores.push("todos los campos son obligatorios")
    return errores
  }

  await agregarPaciente(datos)
  toast.success("Paciente agregado correctamente!")

  return redirect("/agregar/pacientes")

}

const NuevoPaciente = () => {

  const errores = useActionData()

  return (
    <main className='container mx-auto mt-8'>
    {errores && <p className='uppercase text-center text-white bg-red-600 w-2/4 mx-auto py-5 font-bold mb-5'>{errores[0]}</p>}
      <Form method="post" noValidate className='flex flex-col items-center'>
        <Formulario/>
        <input type="submit" className='bg-purple-700 text-white p-4 text-lg uppercase font-semibold mt-6 w-1/5 mb-8 cursor-pointer rounded-md' value={"Agregar paciente"}/>
      </Form>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
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
    </main>
  )
}

export default NuevoPaciente