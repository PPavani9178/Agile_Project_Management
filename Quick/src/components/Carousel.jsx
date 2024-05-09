import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="https://images.ctfassets.net/rz1oowkt5gyp/4kCNudjaBYj90CGgG7Lict/cbafa67336b2007278f50d99ceabfb22/Boards_2x.png?w=1080&fm=webp" alt="" />
      </div>
      <div>
        
        <img src="https://images.ctfassets.net/rz1oowkt5gyp/3ZjLCD2fANfXYSN3ar9WpE/dc84a408c6a3ee89bee4a646ff6d5966/Lists_2x.png?w=1080&fm=webp" alt="" />
      </div>
      
      
    </Slider>
  );
}

export default Carousel;
