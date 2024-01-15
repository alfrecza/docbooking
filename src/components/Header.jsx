import React from 'react'
import {Link, useLocation} from "react-router-dom"
import logo from "../assets/logo.png"


const Header = () => {

  const location = useLocation()

  return (
    <header>
        <nav className='flex justify-between container m-auto text-white  text-lg items-center'>
            <img className='max-w-[150px]' src={logo} alt="imagen logo docbooking" />
            <div className='flex gap-x-10'>
                <Link to={"/"} className={`py-2 ${location.pathname === '/' ? 'border-b-2 border-purple-700' : ''}`}>Inicio</Link>
                <Link to={"/agregar/paciente"} className={`py-2 ${location.pathname === '/agregar/paciente' ? 'border-b-2 border-purple-700' : ''}`}>Agregar Paciente</Link>
                <Link to={"/administrar/pacientes"} className={`py-2 ${location.pathname === '/administrar/pacientes' ? 'border-b-2 border-purple-700' : ''}`}>Administrar</Link>
            </div>
        </nav>
    </header>
  )
}

export default Header