import React from 'react'
import { MdOutlineDarkMode } from 'react-icons/md'
import { SearchInput } from './'
import { Logo } from './'

const Navbar = () => {
  return (
    <nav className='py-2 pr-3 pl-3 md:pl-0 flex items-center gap-3'>
      <div className="md:hidden">
        <Logo />
      </div>
      <SearchInput />
      <div className="search cursor-pointer"><MdOutlineDarkMode /></div>
    </nav>
  )
}

export default Navbar