import { useState, useEffect } from 'react'
import { AiOutlineComment, AiOutlineEye, AiOutlineLike } from 'react-icons/ai'
import { useParams } from 'react-router-dom'
import { Loader, Video, Videos } from '../components'
import { fetchFromApi } from '../utils/fetchFromApi'
const VideoDetail = () => {
  const { id } = useParams()
  const [videoDetails, setVideoDetails] = useState([])
  const [ videos, setVideos ] = useState([])

  useEffect(()=>{
    fetchFromApi(`videos?part=snippet&id=${id}`)
    .then(data => setVideoDetails(data?.items[0]))

    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then(data=>setVideos(data?.items))
  }, [id])

  console.log(videoDetails);
  if(!videoDetails?.snippet) return <Loader />;

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount, commentCount } } = videoDetails
  
  return (
    <div className='p-2'>
      <Video id={id} />
      <div className="py-4">
        <h1 className='text-xl'>{title}</h1>
        <ul className="flex gap-5 text-slate-400 text-sm">
          <li className='flex gap-2 items-center'>
            <AiOutlineEye />
            {viewCount} Views
          </li>
          <li className='flex gap-2 items-center'>
            <AiOutlineLike />
            {likeCount} Likes
          </li>
          <li className='flex gap-2 items-center'>
            <AiOutlineComment />
            {commentCount} Comment
          </li>
        </ul>
      </div>
      <Videos videos={videos} />
    </div>
  )
}

export default VideoDetail