import React from 'react'

const ChannelCard = ({ channel }) => {
  return (
    <div className='text-center'>
      <img src={channel?.snippet?.thumbnails?.medium?.url} className='w-20 h-20 rounded-full mx-auto' alt="" />
      <h3 className="font-semibold mt-5">{channel?.snippet?.title}</h3>
    </div>
  )
}

export default ChannelCard