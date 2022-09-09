import React from 'react'
import { AiOutlineYoutube, AiFillYoutube } from 'react-icons/ai'
const Logo = ({ isMobile }) => {
  return (
    <div className='flex items-center gap-1 cursor-pointer'>
        <AiFillYoutube className='text-primary text-xl' />
        <span className={`text-sm hover:text-primary duration-300 font-semibold ${isMobile&&'hidden'}`}>YouTube</span>
    </div>
  )
}

export default Logo