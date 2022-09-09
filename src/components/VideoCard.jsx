import { AiOutlineEye } from 'react-icons/ai'
import { GiBackwardTime } from 'react-icons/gi'

const VideoCard = ({ video: {id: { videoId }, snippet } }) => {
    // console.log(videoId, snippet);
    return (
        <div className=''>
            <img src={snippet?.thumbnails?.medium?.url} className="w-full rounded-lg" alt={snippet.title} />
            <h3 className="font-semibold mx-1 my-1">{snippet.title.length > 30? snippet.title.slice(0, 30)+'...': snippet.title}</h3>
            <div className="flex items-center gap-10 text-slate-500 text-sm">
                <div className="flex items-center">
                    <AiOutlineEye />
                    <span className='ml-2'>{12344}</span>
                </div>
                <div className="flex items-center">
                    <GiBackwardTime />
                    <span className='ml-2'>{12344}</span>
                </div>
            </div>
        </div>
    )
}

export default VideoCard