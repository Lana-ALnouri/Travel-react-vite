import './VideoSection.css'
import video_play from './../../assets/images/video-play.svg'
export default function VideoSection()
{
  return (
    <>
      <div className="video_section flex-center">
        <h1>Wanderlust</h1>
        <img src={video_play} alt="" />
      </div>
    </>
  );
}
