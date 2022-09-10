import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Videos } from '../components'
import { fetchFromApi } from '../utils/fetchFromApi'
const SearchFeed = () => {

  const { q } = useParams()

  const [videos, setVideos] = useState([])

  useEffect(()=>{
    fetchFromApi(`search?part=snippet&q=${q}`)
    .then(data => {
      setVideos(data.items)
    })
  }, [q])
  
  return (
      <section className='p-2'>
          <h1 className=" text-primary font-bold mb-2 ">{q.toUpperCase()}</h1>
          <Videos videos={videos} />
      </section>
  )

}

export default SearchFeed