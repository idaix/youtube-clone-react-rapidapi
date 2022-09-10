import { Loader, ChannelCard, VideoCard, PlaylistCard } from './'


const Videos = ({ videos }) => {
    if (!videos?.length ) return <Loader />
    return (
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">    
            {videos.map((item, i) => (
                <div key={i}>
                    {item.id.videoId&& <VideoCard video={item}/>}
                    {item.id.channelId&& <ChannelCard channel={item}/>}
                    {item.id.playlistId&& <PlaylistCard playlist={item}/>}
                </div>
            ))}
        </div>
    )
}

export default Videos