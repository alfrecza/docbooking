import React from 'react'
import {CiStar} from "react-icons/ci"
import imagenPersona from "../assets/persona1.jpg" 
import imagenPersona2 from "../assets/persona2.jpg" 
import imagenPersona3 from "../assets/persona3.jpg" 


const Comentarios = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-x-10'>
        <div className='flex flex-col lg:flex-row items-center gap-x-5 lg:w-1/3'>
            <img src={imagenPersona} alt="imagen estrella" className='lg:w-1/2 rounded-full md:h-40 h-36'/>
            <div className='items-center flex flex-col justify-center gap-y-1'>
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
        <div className='flex flex-col lg:flex-row items-center gap-x-5 lg:w-1/3 my-16 lg:my-0 border-y-2 xl:border-y-0 xl:border-x-2 py-8 xl:py-0 lg:px-8 border-purple-600'>
            <img src={imagenPersona2} alt="imagen estrella" className='lg:w-1/2 rounded-full h-36 md:h-40'/>
            <div className='items-center flex flex-col justify-center gap-y-1'>
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
        <div className='flex items-center flex-col  lg:flex-row gap-x-5 lg:w-1/3'>
            <img src={imagenPersona3} alt="imagen estrella" className='lg:w-1/2 rounded-full md:h-40 h-36'/>
            <div className=' items-center flex flex-col justify-center gap-y-1'>
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
