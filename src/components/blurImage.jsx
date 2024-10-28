'use client';
// import { useState } from 'react';
import PropTypes from 'prop-types';
// next
import Image from 'next/image';
// mui
import useMediaQuery from '@mui/material/useMediaQuery';
export default function BlurImage({ ...props }) {
  const isDesktop = useMediaQuery('(min-width:600px)');
  return <Image sizes={isDesktop ? '14vw' : '50vw'} {...props} src={props.src} alt={props.alt} />;
}
BlurImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  static: PropTypes.boolean
  // Additional Image props can be added based on your usage
};