import React from 'react'
import { AiOutlineEye, AiOutlineUser, AiOutlineVideoCamera } from 'react-icons/ai'

const ChannelStatistics = ({ statistics }) => {
  return (
    <ul className="flex flex-col gap-3 text-slate-400">
        <li className="flex items-center">
            <AiOutlineUser className="w-11" />
            <span>{statistics?.statistics?.subscriberCount} Subscribers</span>
        </li>
        <li className="flex items-center">
            <AiOutlineVideoCamera className="w-11" />
            <span>{statistics?.statistics?.videoCount} Videos</span>
        </li>
        <li className="flex items-center">
            <AiOutlineEye className="w-11" />
            <span>{statistics?.statistics?.viewCount} Views</span>
        </li>
    </ul>
  )
}

export default ChannelStatistics