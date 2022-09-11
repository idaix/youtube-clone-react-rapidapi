import React from 'react'
import { Video } from '../components'

const ChannelIntro = ({ video }) => {
  return (
    <div>
        <Video id={video?.id?.videoId} />
        <h3 className="font-semibold">{video?.snippet?.title}</h3>
    </div>
  )
}

export default ChannelIntro