'use client'
import Link from 'next/link'
// import React, { useState } from 'react'
import Image from 'next/image'
const ExampleComponent = () => {
//   const [isDropDownOpen, setIsdropdownOpen] = useState(false)

  //   const handleDropdownToggle = () => {
  //     setIsdropdownOpen(!isDropDownOpen)
  //   }

  const urlLogoSinestesia = 'https://res.cloudinary.com/dlg0ke5dy/image/upload/v1680385380/sinestesia/product_images/upuq3kagp34xdllsasxg.png'
  return (

    <nav className=' nav-mensaje align-middle mx-auto flex flex-col bg-slate-50 '>
      <div className=' hidden md:flex py-3 bg-black  text-white justify-center'>
        <span>Envío GRATIS por compras sobre $50.000 </span>
      </div>
      <div className='nav-logo hidden md:flex py-2 justify-center'>
        <Image
          src={urlLogoSinestesia}
          alt='Descripción de la imagen'
          width={120}
          height={120}
        />
      </div>

      <div className=' flex items-center justify-center shadow-md '>

        <ul className='hidden md:flex  py-6 items-start  gap-4 p-2'>
          <li>
            <button className='hover:bg-slate-200 hover:transition-shadow'>Home</button>
          </li>
          <li>
            <button className='hover:bg-slate-200 hover:transition-shadow'>Productos</button>
          </li>
        </ul>

        <ul className='flex gap-1 '>
          <li>
            <Link href='/#'>buscar</Link>
          </li>
          <li>
            <button className='hover:bg-sla  hover:transition-shadow'>cuenta</button>
          </li>
        </ul>
      </div>

    </nav>

  )
}

export default ExampleComponent
