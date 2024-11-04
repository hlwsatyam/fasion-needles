'use client';
// react
import React from 'react';
import footerList from '../config.json';
// mui
import { alpha } from '@mui/material/styles';
import { Typography, Container, Stack, Box, IconButton, Grid } from '@mui/material';
// next
import NextLink from 'next/link';
// components
import NewsLetter from './newsletter';
import logo from '../../../../../public/fashionneedles_logo.webp';
// icons
import { IoLogoInstagram } from 'react-icons/io5';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';

import { BiX } from 'react-icons/bi';
import Image from 'next/image';

const SOCIAL_MEDIA_LINK = [
  {
    name: 'facebook',
    linkPath: 'https://www.facebook.com/fashionneedles2?mibextid=LQQJ5d',
    icon: <FaFacebook className="facebook" />
  },
  {
    name: 'instagram',
    linkPath: 'https://www.instagram.com/fashion_needles/',
    icon: <IoLogoInstagram className="insta" />
  },
  {
    name: 'Twitter',
    linkPath: 'https://twitter.com/@fashion_needles',
    icon: <BiX className="linkedin" />
  },
  {
    name: 'youtube',
    linkPath: 'https://www.youtube.com/@fashion_needles',
    icon: <IoLogoYoutube className="youtube" />
  }
];

export default function Footer() {
  return (
    <Box
      sx={{
        // bgcolor: (theme) => alpha(theme.palette.secondary.main, 0.2),
        bgcolor: 'background.paper',
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        py: 3,

        overflow: 'hidden',
        position: 'relative',
        '&:before': {
          content: "''",
          position: 'absolute',
          bottom: '-50px',
          left: 100,
          bgcolor: (theme) => alpha(theme.palette.secondary.light, 0.77),
          height: 100,
          width: 100,
          borderRadius: '50px',
          zIndex: 0
        },
        '&:after': {
          content: "''",
          position: 'absolute',
          top: 100,
          right: '-50px',
          bgcolor: (theme) => alpha(theme.palette.secondary.light, 0.77),
          height: 100,
          width: 100,
          borderRadius: '50px',
          zIndex: 0
        },
        display: {
          md: 'block',
          xs: 'none'
        }
      }}
    >
      <Container fixed>
        <Stack
          className="newsletter"
          spacing={1}
          sx={{
            textAlign: 'center',
            justifyContent: 'center',
            position: 'relative',
            width: '100%',
            margin: 'auto',
            '&:before': {
              content: "''",
              position: 'absolute',
              top: '-80px',
              left: 0,
              ngcolor: (theme) => alpha(theme.palette.secondary.light, 0.77),
              height: 100,
              width: 100,
              borderRadius: '50px',
              zIndex: 0
            }
          }}
        >
          <Grid
            container
            style={{
              textAlign: 'left'
            }}
            spacing={3}
          >
            {footerList.footer_links.map((section, index) => (
              <Grid item xs={6} sm={4} md={3} key={index}>
                <Box>
                  <Typography
                    variant="h6"
                    style={{
                      borderBottom: '1px solid #e0e0e0',
                      display: 'flex',
                      alignItems: 'center',
                      columnGap: 5
                    }}
                    color="text.primary"
                    gutterBottom
                  >
                    {section.headline}
                    {section.headline === 'COMPONY' && (
                      <Image
                        src={logo}
                        style={{
                         
                          quality: 100
                        }}
                        width={30}
                        height={30}
                      />
                    )}
                  </Typography>

                  <Stack spacing={1}>
                    {section.children.map((link, linkIndex) => (
                      <NextLink key={linkIndex} href={link.href} passHref>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          component="a"
                          sx={{
                            textDecoration: 'none',
                            '&:hover': { textDecoration: 'underline', color: 'primary.main' }
                          }}
                        >
                          {link.name}
                        </Typography>
                      </NextLink>
                    ))}
                  </Stack>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Stack
            direction="row"
            style={{
              borderTop: '1px solid #e0e0e0',
              borderBottom: '1px solid #e0e0e0'
            }}
            spacing={3}
            justifyContent="center"
          >
            {SOCIAL_MEDIA_LINK.map((item, index) => (
              <React.Fragment key={index}>
                <IconButton
                  aria-label=""
                  name={name}
                  component={NextLink}
                  href={item.linkPath}
                  target="_blank"
                  sx={{
                    color: (theme) =>
                      index === 0 || index === 2 ? theme.palette.primary.main : theme.palette.error.main,
                    fontSize: 28
                  }}
                >
                  {item.icon}
                </IconButton>
              </React.Fragment>
            ))}
          </Stack>

          {/* <Typography variant="h2" color="text.primary" fontWeight={700}>
            Newsletter
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Subscribe to our newsletter and stay updated with the latest news and
          </Typography>
          <NewsLetter /> */}
          <Typography variant="body1" color="text.primary" textAlign="center">
            © 2024 Fashion Needles. All rights reserved
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
