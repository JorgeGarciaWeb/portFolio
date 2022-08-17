import React, { Component } from 'react';
import './Video.css';

const Video = () => {


    return (
        <div className='delimitador'>
            <div className='contenedor'>
            <video width='100%' autoPlay muted loop >
                <source src="https://res.cloudinary.com/dpsettvmg/video/upload/v1660737868/video_phngqx.mp4" />
            </video>
            </div>
        </div>

        

    )
}


export default Video