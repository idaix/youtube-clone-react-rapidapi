import React from 'react'
import { FiSearch } from 'react-icons/fi'

const SearchInput = () => (
    <div className="flex-1 flex items-center rounded p-1 light-bg">
        <FiSearch className='text-slate-400 ml-1' />
        <input type="text" placeholder='Search...' className='bg-transparent border-none outline-none w-full pl-3 pr-1 py-1 placeholder:text-sm placeholder:text-slate-400' />
        <button className=' px-3 py-1 rounded bg-slate-900'>Search</button>
    </div>
)

export default SearchInput