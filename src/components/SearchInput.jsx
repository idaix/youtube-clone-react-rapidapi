import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

const SearchInput = () => {
    let navigate = useNavigate()

    const [value, setValue] = useState('')

    const handleClick = () => {
        navigate(`/search/${value}`)
    }
    return (
        <div className="flex-1 flex items-center rounded p-1 light-bg">
            <FiSearch className='text-slate-400 ml-1' />
            <input 
                type="text" 
                placeholder='Search...' 
                value={value}
                onChange={(e)=>setValue(e.target.value)} 
                className='bg-transparent border-none outline-none w-full pl-3 pr-1 py-1 placeholder:text-sm placeholder:text-slate-400' 
            />
            
            <button
                onClick={handleClick}
                className=' px-3 py-1 rounded bg-primary'
             >Search</button>
        </div>
    )
}

export default SearchInput