import { useState, useEffect } from 'react'
import { Videos } from '../components'
import { fetchFromApi } from '../utils/fetchFromApi'

const Feed = ({ query }) => {
  const [videos, setVideos] = useState([])

  useEffect(()=>{
    fetchFromApi(`search?part=snippet&q=${query}`)
    .then(data => {
      setVideos(data.items)
    })
  }, [query])

  return (
    <section className='p-2'>
      <h1 className=" text-primary font-bold mb-2 ">{query}</h1>
      <Videos videos={videos} />
    </section>
  )
}

export default Feed