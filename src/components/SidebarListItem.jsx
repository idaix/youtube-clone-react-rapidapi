import React from 'react'

const SidebarListItem = ({ name }) => {
  return (
    <li className='p-2 hover:bg-primary rounded'>{name}</li>
  )
}

export default SidebarListItem