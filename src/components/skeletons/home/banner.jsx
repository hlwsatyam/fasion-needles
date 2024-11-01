import React from 'react';
import { Box, Skeleton } from '@mui/material';
export default function BannerSkeleton() {
  return (
    <Box
      sx={{
        position: 'relative',
        '&:after': {
          content: `""`,
          display: 'block',
          pb: { xs: '60%', md: '40%' }
        }
      }}
    >
      <Skeleton
        vairant="rectangular"
        width="100%"
        height="100%"
        sx={{ position: 'absolute', transform: 'none', borderRadius: 0 }}
      />
    </Box>
  );
}
