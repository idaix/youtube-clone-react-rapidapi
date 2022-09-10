
import { Logo } from './'
import { Link } from 'react-router-dom'

import { categories } from '../utils/constants'

const Sidebar = ({ query, setQuery }) => {
  
  return (
    <aside className='hidden md:block fixed top-0 left-0 h-screen md:w-60 lg:w-72 xl:w-80 overflow-auto p-2'>
      <div className="light-bg h-full rounded-xl p-3">
        <div className='px-3'>
          <Link to='/'>
            <Logo />
          </Link>
        </div>
        <ul className="pt-3 flex flex-col gap-2">
          { categories.map(category=>(
            <li key={category.name}>
              <button
                onClick={()=>setQuery(category.slug)} 
                className={`p-2 hover:text-primary hover:bg-slate-700 rounded duration-300 w-full text-left flex items-center ${query==category.slug?'text-primary bg-slate-700':''}`}
              >
                <span className='w-10'>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            </li>
          )) }
        </ul>

      </div>
    </aside>
  )
}

export default Sidebar