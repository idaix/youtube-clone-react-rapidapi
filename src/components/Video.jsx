import ReactPlayer from "react-player/youtube"

const Video = ({ id }) => (
  <div className="aspect-video w-full">
    <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls width='100%' height='100%' />
  </div>
)

export default Video