import { useEffect, useState } from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { GiBackwardTime } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { fetchFromApi } from '../utils/fetchFromApi'

const VideoCard = ({ video: {id: { videoId }, snippet } }) => {
    const [ videoDetails, setVideoDetails ] = useState([])
    
    useEffect(()=>{
        fetchFromApi(`videos?part=snippet&id=${videoId}`)
        .then(data=>setVideoDetails(data?.items[0]))
    },[videoId])
    console.log(videoDetails);

    return (
        <Link to={`/video/${videoId}`}>
            <img src={snippet?.thumbnails?.medium?.url} className="w-full rounded-lg" alt={snippet?.title} />
            <h3 className="font-semibold mx-1 my-1">{snippet?.title.length > 30? snippet?.title.slice(0, 30)+'...': snippet?.title}</h3>
            <div className="flex items-center gap-10 text-slate-500 text-sm">
                <div className="flex items-center">
                    <AiOutlineEye />
                    <span className='ml-2'>{videoDetails.statistics?.viewCount} views</span>
                </div>
                {/* <div className="flex items-center">
                    <GiBackwardTime />
                    <span className='ml-2'>{videoDetails.snippet?.publishedAt}</span>
                </div> */}
            </div>
        </Link>
    )
}

export default VideoCard