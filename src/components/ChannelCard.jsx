import React from 'react'
import { Link } from 'react-router-dom'

const ChannelCard = ({ channel }) => {
  return (
    <Link to={`/channel/${channel.id.channelId}`}>
      <div className='text-center'>
        <img src={channel?.snippet?.thumbnails?.medium?.url} className='w-20 h-20 rounded-full mx-auto' alt="" />
        <h3 className="font-semibold mt-5">{channel?.snippet?.title}</h3>
      </div>
    </Link>
  )
}

export default ChannelCard