import React from 'react';
import '../../Header/MyNavbar.css'
import Video from '../../Image/DreamsofDali- Video.mp4'

const BackgroundDefault = () => {

    return (
        
        <video className='bgLogin' autoPlay muted loop>
            <source src={Video} type='video/mp4'/>
        </video>
        
    );
};

export default BackgroundDefault;