import React from 'react'
import {CiStar} from "react-icons/ci"
import imagenPersona from "../assets/persona1.jpg" 
import imagenPersona2 from "../assets/persona2.jpg" 
import imagenPersona3 from "../assets/persona3.jpg" 


const Comentarios = () => {
  return (
    <div className='flex gap-x-10'>
        <div className='flex items-center gap-x-5 w-1/3'>
            <img src={imagenPersona} alt="imagen estrella" className='w-1/2 rounded-full h-40'/>
            <div className='flex flex-col justify-center gap-y-1'>
                <div className='flex'>
                    <CiStar color='yellow' size={"2em"}/>
                    <CiStar color='yellow'size={"2em"}/>
                    <CiStar color='yellow'size={"2em"}/>
                    <CiStar color='yellow'size={"2em"}/>
                    <CiStar color='yellow'size={"2em"}/>
                </div>
                <h3 className='text-white uppercase text-lg font-semibold'>Increible, muy facil de usar</h3>
                <p className='text-white text-md'>Soy medica, me resultó muy util para poder gestinonar mis pacientes</p>
            </div>
        </div>
        <div className='flex items-center gap-x-5 w-1/3'>
            <img src={imagenPersona2} alt="imagen estrella" className='w-1/2 rounded-full h-40'/>
            <div className='flex flex-col justify-center gap-y-1'>
                <div className='flex'>
                    <CiStar color='yellow' size={"2em"}/>
                    <CiStar color='yellow'size={"2em"}/>
                    <CiStar color='yellow'size={"2em"}/>
                    <CiStar color='yellow'size={"2em"}/>
                    <CiStar color='yellow'size={"2em"}/>
                </div>
                <h3 className='text-white uppercase text-lg font-semibold'>Increible, muy facil de usar</h3>
                <p className='text-white text-md'>Soy medica, me resultó muy util para poder gestinonar mis pacientes</p>
            </div>
        </div>
        <div className='flex items-center gap-x-5 w-1/3'>
            <img src={imagenPersona3} alt="imagen estrella" className='w-1/2 rounded-full h-40'/>
            <div className='flex flex-col justify-center gap-y-1'>
                <div className='flex'>
                    <CiStar color='yellow' size={"2em"}/>
                    <CiStar color='yellow'size={"2em"}/>
                    <CiStar color='yellow'size={"2em"}/>
                    <CiStar color='yellow'size={"2em"}/>
                    <CiStar color='yellow'size={"2em"}/>
                </div>
                <h3 className='text-white uppercase text-lg font-semibold'>Increible, muy facil de usar</h3>
                <p className='text-white text-md'>Soy medica, me resultó muy util para poder gestinonar mis pacientes</p>
            </div>
        </div>
    </div>
  )
}

export default Comentarios
