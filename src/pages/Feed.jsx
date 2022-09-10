import { useState, useEffect } from 'react'
import { Sidebar, Videos } from '../components'
import { fetchFromApi } from '../utils/fetchFromApi'

const Feed = () => {
  const [videos, setVideos] = useState([])
  const [query, setQuery] = useState('')

  useEffect(()=>{
    fetchFromApi(`search?part=snippet&q=${query}`)
    .then(data => {
      setVideos(data.items)
    })
  }, [query])

  return (
    <>
      <Sidebar setQuery={setQuery} query={query} />
      <section className='p-2 md:pl-60 lg:pl-72 xl:pl-80'>
        <h1 className=" text-primary font-bold mb-2 ">{query.toUpperCase()}</h1>
        <Videos videos={videos} />
      </section>
    </>
  )
}

export default Feed