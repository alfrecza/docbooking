import React from 'react'

const Footer = () => {
  return (
    <footer className=" w-10/12 m-auto flex flex-col items-center gap-y-5 md:flex-row md:justify-between pt-20 pb-3 text-white md:gap-x-8 lg:gap-x-0 mt-10">
        <div className="flex flex-col sm:flex-row items-center gap-y-5 sm:gap-y-0 gap-x-6">
            <a className=" border-b hover:text-gray-200 text-lg"  href="#">About me</a>
            <a className=" border-b hover:text-gray-200 text-lg"  href="#">Contact</a>
        </div>
        <div>
            <p className="text-lg"> © 2024 Alfre, all rights reserved
            </p>
        </div>
    </footer>
  )
}

export default Footer