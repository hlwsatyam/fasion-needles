"use client";
import React from 'react';
import Slider from 'react-slick';
import { Box, CardMedia } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import f from '../../../../../public/b1.jpg'
import g from '../../../../../public/b2.webp'
import Image from 'next/image';
const BannerCarousel = ({
  banners = [
     
    {
      image: f,
    },
    {
      image: g,
    },
    {
      image: f,
    },
     
    
   
  ]
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '18%',
    appendDots: (dots) => (
      <Box sx={{ padding: "10px", position: "absolute", bottom: "10px", left: "50%", transform: "translateX(-50%)" }}>
        <ul style={{ margin: 0, display: 'flex', justifyContent: 'center', listStyleType: 'none' }}>
          {dots}
        </ul>
      </Box>
    ),
    customPaging: (i) => (
      <Box
        sx={{
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          background: 'gray',
          margin: '0 0',
          cursor: 'pointer',
          '&.slick-active': {
            background: 'black',
          },
        }}
      />
    ),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Box sx={{ width: '100%', maxWidth: '100%', margin: 'auto', borderRadius: 2, overflow: 'hidden', position: 'relative' }}>
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index}>
            <Box sx={{ position: 'relative', height: { xs: 200, sm: 300, md: 500 } }}>
            <Image
                  src={banner.image}
                  alt={`Slide ${index + 1}`}
                  layout="fill"
                  objectFit="contain"
                  style={{
                   
                    borderRadius: '12px',
                  }}
                />
            </Box>
          </div>
        ))}
      </Slider>
    </Box>
  );
};

// Custom Next Arrow
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Box
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'black',
        borderRadius: '50%',
        width: '30px',
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        right: '10px',
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
};

// Custom Previous Arrow
const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Box
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'black',
        borderRadius: '50%',
        width: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '30px',
        left: '10px',
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
};

export default BannerCarousel;
