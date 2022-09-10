import React from 'react'

const ChannelHead = ({ channelDetails }) => {
  return (
    <div className="flex items-center flex-col">
        <figure className="w-full h-32 sm:h-36 md:h-40 lg:h-48 xl:h-56 2xl:h-60 rounded overflow-hidden shadow">
          <img src={channelDetails?.brandingSettings?.image?.bannerExternalUrl} alt={''} className="w-full object-cover object-center h-full"  />
        </figure>
        <div className="" style={{marginTop: -40}}>
            <img src={channelDetails?.snippet?.thumbnails?.medium?.url} className='w-20 h-20 md:w-28 md:h-28 rounded-full mx-auto border shadow' alt="" />
            <h1 className='font-semibold text-2xl mt-3'>{channelDetails?.snippet?.title}</h1>
        </div>
    </div>
  )
}

export default ChannelHead