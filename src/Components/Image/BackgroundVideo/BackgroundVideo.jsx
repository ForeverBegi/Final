import React from 'react';
import '../../Header/MyNavbar.css'
import Video from '../../Image/Vincent-van-Gogh-STARRY-NIGHT.mp4'
import { Link } from 'react-router-dom';

const BackgroundVideo = () => {
    return (
      <Link to='#'>
            <div className='bgMask'>
              <div className='bgNavbar'>
                <video className='bgVideo' autoPlay muted loop src={Video} type='video/mp4'></video>
              </div>
              <div className='introInfo'>
                <div className='container'>
                  <h1 className='intro__title' style={{fontSize: '35px'}}> Charity Art Gallery</h1>
                  <h2 className='intro__title__two'>Kyrgyz Heart Foundation</h2>
                </div>
              </div>
            </div>
      </Link>

    );
};

export default BackgroundVideo;