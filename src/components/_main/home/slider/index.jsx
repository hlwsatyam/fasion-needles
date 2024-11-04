"use client";
import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const BannerCarousel = ({
  banners = [
    { image: require('../../../../../public/b3.png') },
    { image: require('../../../../../public/b8.png') },
    { image: require('../../../../../public/b4.png') },
    { image: require('../../../../../public/b7.png') },
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
          margin: '0 5px',
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
    <Box sx={{ width: '100%', margin: 'auto', borderRadius: 2, overflow: 'hidden', position: 'relative' }}>
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <Box key={index} sx={{ width: '100%', height: { xs: '200px', sm: '300px', md: '80vh' }, position: 'relative' }}>
            <Image
              src={banner.image}
              alt={`Slide ${index + 1}`}
              layout="fill"
              style={{
                

              }}
              
            />
          </Box>
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
        background: 'black',
        borderRadius: '50%',
        width: '30px',
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        left: '10px',
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
};

export default BannerCarousel;
