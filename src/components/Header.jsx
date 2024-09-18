import React from 'react'
import logo from '../assets/logoipsum-288.svg'

function Header() {
  return (
    <>
     <nav className="bg-white shadow-md py-4 px-10 flex justify-between items-center">
          <img src={logo} alt="Logo" className="w-32" />
          
        </nav>
    </>
  )
}

export default Header
