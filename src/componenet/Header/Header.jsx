import React, { useEffect, useState } from 'react'
import DictionaireLogo from '../Main/DictionaireLogo'
import Moon from './Moon'
const Header = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [darkMode,setDarkMode] =useState(true)

  const handleChange = event => {
    setSelectedValue(event.target.value);
    console.log(selectedValue)
  };

  
  const toggleDarkMode=() => {
    setDarkMode(prv => !prv)
  }
  useEffect(()=>{
    document.body.classList.toggle('dark')
  },[darkMode])
  
 useEffect(()=>{
   if (selectedValue.includes('sans')){
     document.body.style.fontFamily='sans-serif'
   }else {
     document.body.style.fontFamily=`${selectedValue}`
   }
 },[selectedValue])

  return (
    <header >
      <nav className='flex items-center justify-between'>
       <DictionaireLogo /> 
       <div className='flex items-center justify-between'>
        <select value={selectedValue} onChange={handleChange} className={`bg-black w-20 text-white border-0`} >
          <option className='hover:text-accent' value="sans serif">sans serif</option>
          <option className='hover:text-accent' value="serif">Serif</option>
          <option className='hover:text-accent' value="monospace" selected>monospace</option>

        </select>
        <div onClick={toggleDarkMode} className='flex items-center'>
        <div className='h-5 switchModeWrraper mx-4 w-10 rounded-full  bg-accent cursor-pointer flex items-center px-1 dark:bg-neutral-500 '>
          <span className={`h-4 toggler  bg-white w-4 block rounded-full ${darkMode ? 'translate-x-full' :''}`}></span>
        </div>
        <Moon isDark={darkMode}/>
       </div>
       </div>
      </nav>
    </header>
  )
}

export default Header