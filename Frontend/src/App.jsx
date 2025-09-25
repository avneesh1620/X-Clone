import React from 'react'
import Sidebar from './Components/Sidebar'
import Midbar from './Components/Midbar'
import Rightbar from './Components/Rightbar'
import { useState } from 'react'

const App = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(prev => !prev)
  }

  return (
    <>
      <div className='min-h-screen bg-black'>

        <div className='flex'>

          <div className='max-sm:hidden max-sm:w-[0%] lg:w-[20%] max-lg:w-[30%] fixed'><Sidebar /></div>
          <div className='max-lg:ml-[30%] lg:ml-[20%] lg:w-[50%] max-lg:w-[70%] max-sm:w-[100%] max-sm:ml-[0%]'><Midbar onToggle={toggleMenu} isOpen={menuOpen} /></div>
          <div className='lg:w-[30%] max-lg:w-[0%] max-lg:hidden lg:block'><Rightbar /></div>
        </div>

      </div>
    </>
  )
}

export default App