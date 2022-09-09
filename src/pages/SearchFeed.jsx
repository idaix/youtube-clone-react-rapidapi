import React from 'react'
import { useParams } from 'react-router-dom'
const SearchFeed = () => {
  const { q } = useParams()
  return (
    <div>Search for {q}</div>
  )
}

export default SearchFeed