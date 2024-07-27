import React, { useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';

import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const vidRef = React.useRef(null);

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo)

    if(playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  const handleMouseEnter = () => {
    setShowOverlay(true);
  };

  const handleMouseLeave = () => {
    setShowOverlay(false);
  };

  return (
    <div className='app__video'  onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave} >
    <video 
      src={meal}
      ref={vidRef}
      type="video/mp4"
      loop
      controls={false}
      muted
     
    />

  {showOverlay && (
    <div className='app__video-overlay flex__center'>
      <div 
        className='app__video-overlay_circle flex__center'
        onClick={handleVideo}
      >
        {playVideo 
          ? <BsPauseFill color='#fff' fontSize={30}/>
          : <BsFillPlayFill color='#fff' fontSize={30}/>}
      </div>
    </div>
  )}
  </div>
  )
  
}

export default Intro;
