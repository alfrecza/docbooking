import React from 'react'
import { Form, useLoaderData, redirect, useActionData } from 'react-router-dom'
import Formulario from "../components/Formulario"
import { actualizarPaciente, obtenerPaciente } from '../../data/pacientes'
import { ToastContainer,toast } from 'react-toastify'

export async function loader({params}) {
  const paciente = await obtenerPaciente(params.id)
  return paciente
}

export async function action({request, params}) {
  const formData = await request.formData()
  const datos = Object.fromEntries(formData)

  const email = datos.email
  const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
  let errores = []

  if(Object.values(datos).includes("")) {
    errores.push("Todos los campos son obligatorios")
    toast.error(errores[0])
    return errores
  } else if (!emailRegex.test(email)) {
    errores.push("El email introducido no es válido")
    toast.error(errores[0])
    return errores
  }
  await actualizarPaciente(params.id, datos)
  toast.success("Se guardaron los cambios!")

  return  redirect('/administrar/pacientes') 
}

const  EditarPaciente = () => {

  const paciente = useLoaderData()

  const errores = useActionData()

  return (
    <main>
      {errores?.length && <ToastContainer
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
      />}      
      <h2 className='text-center text-2xl font-semibold uppercase text-white mb-10'>Editar paciente</h2>
       <Form method="post" noValidate className='flex flex-col items-center'>
        <Formulario paciente={paciente}/>
        <input type="submit" className='bg-purple-700 hover:bg-purple-600 text-white p-4 text-lg uppercase font-semibold mt-6 w-1/5 mb-8 cursor-pointer rounded-md' value={"Editar paciente"}/>
      </Form>
    </main>
  )
}

export default EditarPaciente