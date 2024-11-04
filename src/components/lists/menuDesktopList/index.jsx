import React from 'react';
// components
import RootStyled from './styled';
// material
import { Box, ListSubheader, ListItem, Grid } from '@mui/material';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import { m } from 'framer-motion';
IconBullet.propTypes = {
  type: PropTypes.string.isRequired
};
function IconBullet({ type = 'item' }) {
  return (
    <Box className="icon-bullet-main">
      <Box component="span" className={`icon-bullet-inner ${type !== 'item' && 'active'}`} />
    </Box>
  );
}
MenuDesktopList.propTypes = {
  parent: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired
};


export default function MenuDesktopList({ ...props }) {
  const { parent, onClose } = props;
  const [currentName, setCurrentName] = React.useState('');

  React.useEffect(() => {
    const currentName = localStorage.getItem('category');
    setCurrentName(currentName);
  }, []);

  return (
    <Grid container style={{ margin:'auto', width:'100%'}}   >
      {parent?.subCategories?.map((subCategory) => 
        parent.name !== currentName ? (
          ''
        ) : (
          <Grid item xs={12} sm={6} md={4} lg={3} key={subCategory?.slug}>
            <ListItem
              className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
              onClick={onClose}
              component={NextLink}
              href={`/products/${parent?.slug}/${subCategory?.slug}`}
            >
              <IconBullet />
              <span>{subCategory?.name}</span>
            </ListItem>
          </Grid>
        )
      )}
    </Grid>
  );
}