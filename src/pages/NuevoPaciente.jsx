import Formulario from '../components/Formulario'
import { agregarPaciente } from '../../data/pacientes'
import {Form, redirect} from 'react-router-dom'

export async function action ({request}) {
  const formData = await request.formData()
  const datos = Object.fromEntries(formData)

  await agregarPaciente(datos)

  return redirect("/")

}

const NuevoPaciente = () => {
  return (
    <main className='container mx-auto mt-8'>
      <Form method="post" noValidate className='flex flex-col items-center'>
        <Formulario/>
        <input type="submit" className='bg-purple-700 text-white p-4 text-lg uppercase font-semibold mt-6'/>
      </Form>
    </main>
  )
}

export default NuevoPaciente