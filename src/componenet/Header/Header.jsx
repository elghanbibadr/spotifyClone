import React, { useEffect, useState } from 'react'
import DictionaireLogo from '../Main/DictionaireLogo'
import Moon from './Moon'
const Header = () => {
const [darkMode,setDarkMode] =useState(true)
  const toggleDarkMode=() => {
    setDarkMode(prv => !prv)
  }

  

  return (
    <header >
      <nav className='flex items-center justify-between'>
       <DictionaireLogo /> 
       <div className='flex items-center justify-between'>
        <select className={`bg-black w-20 text-white border-0`} >
          <option className='hover:text-accent' value="sans serif">Sans Serif</option>
          <option className='hover:text-accent' value="serif">Serif</option>
          <option className='hover:text-accent' value="mono" selected>Mono</option>

        </select>
        <div onClick={toggleDarkMode} className='flex items-center'>
        <div className='h-5 switchModeWrraper mx-4 w-10 rounded-full  bg-accent cursor-pointer flex items-center px-1 '>
          <span className={`h-4 toggler  bg-white w-4 block rounded-full ${darkMode ? 'translate-x-full' :''}`}></span>
        </div>
        <Moon/>
       </div>
       </div>
      </nav>
    </header>
  )
}

export default Header