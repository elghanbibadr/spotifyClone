import React from 'react'
import DictionaireLogo from '../Main/DictionaireLogo'
const Header = () => {
  return (
    <header >
      <h1 >hello world</h1>
      <nav>
       <DictionaireLogo /> 
       <div className='custom-select'>
        <select className={` bg-black p-2 text-white border-0`} >
          <option className='hover:text-accent' value="sans serif">Sans Serif</option>
          <option className='hover:text-accent' value="serif">Serif</option>
          <option className='hover:text-accent' value="mono" selected>Mono</option>

        </select>
       </div>
      </nav>
    </header>
  )
}

export default Header