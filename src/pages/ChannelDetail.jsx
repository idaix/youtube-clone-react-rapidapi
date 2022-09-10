import { useEffect, useState } from "react"
import { AiOutlineUser } from "react-icons/ai"
import { useParams } from "react-router-dom"
import { ChannelHead, ChannelIntro, ChannelStatistics, Videos } from "../components"
import { fetchFromApi } from "../utils/fetchFromApi"

const ChannelDetail = () => {
  const { id } = useParams()
  const [ channelDetails, setChannelDetails ] = useState(null)
  const [ videos, setVideos ] = useState([])
  useEffect(()=>{
    fetchFromApi(`channels?part=snippet&id=${id}`)
    .then(data => setChannelDetails(data?.items[0]))

    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
    .then(videos => setVideos(videos?.items))
  }, [id])

  // console.log(channelDetails, videos)
  return (
    <div className="p-3">
      <ChannelHead channelDetails={channelDetails} />
      <div className="grid md:grid-cols-4 gap-10 mt-20">
        <div className="md:col-span-3">
          <ChannelIntro video={videos[0]} />
        </div>
        <div className="col-span-1">
          <ChannelStatistics statistics={channelDetails} />
        </div>
      </div>

      <div className="mt-20">
        {videos?(
              <Videos videos={videos}/>
            ):(
              <p>No videos yet</p>
        )}
      </div>
      
    </div>
  )
}

export default ChannelDetail