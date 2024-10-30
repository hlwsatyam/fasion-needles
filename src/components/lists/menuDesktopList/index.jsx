import React from 'react';
// components
import RootStyled from './styled';
// material
import { Box, ListSubheader, ListItem } from '@mui/material';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
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
  const { parent,currentName, onClose } = props;
console.log(currentName)
  return (
    <RootStyled disablePadding>
      <>
         
         
     
        {parent?.subCategories?.map((subCategory) => (
             parent.name !== currentName ? (
            ''
          ) : 
          <React.Fragment key={Math.random()}>
            <ListItem
              className="list-item"
              onClick={() => {
                onClose();
              }}
              component={NextLink}
              href={`/products/${parent?.slug}/${subCategory?.slug}`}
            >
              <IconBullet />

              {subCategory?.name}
            </ListItem>
          </React.Fragment>
        ))}
      </>
    </RootStyled>
  );
}
