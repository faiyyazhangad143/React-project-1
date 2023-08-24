import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";


const Servicess = () => {
  return (
    <div className='services'>

        <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={1000}
        >

            <div>
            <img src={img1} alt="Item1" />
            <p className='legend'>Fullstack</p>
              
            </div>

            <div>
            <img src={img2} alt="Item3" />
            <p className='legend'>peer to peer support </p>
              
            </div>
        </Carousel>
    </div>
  )
}

export default Servicess;