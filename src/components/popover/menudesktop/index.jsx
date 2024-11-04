import React from 'react';
import PropTypes from 'prop-types';
// mui
import { Grid } from '@mui/material';

// components
import MenuDesktopList from 'src/components/lists/menuDesktopList';
import MenuPopover from 'src/components/popover/popover';

export default function MenuDesktop({ ...props }) {
  const { isOpen, clickedBar, onClose, isLoading, data } = props;
  const [currentName, setCurrentName] = React.useState('');

  React.useEffect(() => {
    const currentName = localStorage.getItem('category');
    setCurrentName(currentName);
  }, []);
  return (
    <MenuPopover
      open={isOpen}
      onClose={onClose}
      anchorReference="anchorPosition"
      anchorPosition={{
        top: 80,
        left: 0
      }}
      isDesktop
      sx={{
        display: 'block!important'
      }}
    >
      <Grid container spacing={3}>
        {data?.map((parent) =>
          parent.name !== currentName ? (
            ''
          ) : (
            <Grid item   key={Math.random()}>
              <MenuDesktopList currentName={clickedBar} parent={parent} isLoading={isLoading} onClose={onClose} />
            </Grid>
          )
        )}
      </Grid>
    </MenuPopover>
  );
}
MenuDesktop.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  data: PropTypes.array
};
