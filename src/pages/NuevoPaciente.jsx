import Formulario from '../components/Formulario'
import { agregarPaciente } from '../../data/pacientes'
import {Form, redirect, useActionData} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



export async function action ({request}) {

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

  await agregarPaciente(datos)
  return redirect("/administrar/pacientes")

}

const NuevoPaciente = () => {

  const errores = useActionData()

  return (
    <main className='container mx-auto mt-8'>
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
    {/* {errores && <p className='uppercase text-center text-white bg-red-600 w-2/4 mx-auto py-5 font-bold mb-5'>{errores[0]}</p>} */}
      <Form method="post" noValidate className='flex flex-col items-center'>
        <Formulario/>
        <input type="submit" className='bg-purple-700 hover:bg-purple-600 text-white p-4 text-lg uppercase font-semibold mt-6 w-1/5 mb-8 cursor-pointer rounded-md' value={"Agregar paciente"}/>
      </Form>
    </main>
  )
}

export default NuevoPaciente