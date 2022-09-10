import React from 'react'
import { MdOutlineDarkMode } from 'react-icons/md'
import { SearchInput } from './'
import { Logo } from './'

const Navbar = () => {
  return (
    <nav className='py-2 pr-3 pl-3 md:pl-0 flex items-center gap-3 sticky top-0'>
      <div className="md:pl-8 md:w-60 lg:w-72 xl:w-80">
        <Logo />
      </div>
      <SearchInput />
      <div className="search cursor-pointer"><MdOutlineDarkMode /></div>
    </nav>
  )
}

export default Navbar