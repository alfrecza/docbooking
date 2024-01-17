import React from 'react'
import {Link, useLocation} from "react-router-dom"
import logo from "../assets/logo.png"


const Header = () => {

  const location = useLocation()

  return (
    <header>
        <nav className='flex flex-col md:flex-row justify-between md:w-9/12 m-auto text-white text-lg items-center bg-purple-400 bg-opacity-30 pb-7 md:bg-transparent'>
            <a href="/"><img className='max-w-[150px]' src={logo} alt="imagen logo docbooking" /></a>
            <div className='flex flex-col sm:flex-row gap-x-10 items-center sm:items-start'>
                <Link to={"/"} className={`py-2 ${location.pathname === '/' ? 'border-b-2 border-purple-700' : ''}`}>Inicio</Link>
                <Link to={"/agregar/paciente"} className={`py-2 ${location.pathname === '/agregar/paciente' ? 'border-b-2 border-purple-700' : ''}`}>Agregar Paciente</Link>
                <Link to={"/administrar/pacientes"} className={` py-2${location.pathname === '/administrar/pacientes' ? 'border-b-2 border-purple-700' : ''}`}>Administrar</Link>
            </div>
        </nav>
    </header>
  )
}

export default Header