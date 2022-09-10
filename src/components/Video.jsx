import ReactPlayer from "react-player/youtube"

const Video = ({ id }) => (
  <div>
    <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls />
  </div>
)

export default Video