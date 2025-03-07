
'use client';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import useClient from '@/src/helpers/useClient';
import { Box, Button, Badge } from '@mui/material';
import { selectFavoriteItems } from '@/src/redux/favorites/selectors';
import SidePanel from '../SidePanel/SidePanel';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { FavoriteSidePanelAttributes } from '../constants';

const Favorites = () => {
  const favoriteItems = useSelector(selectFavoriteItems);
  const [openSidePanel, setOpenSidePanel] = useState(false);
  const mounted = useClient()

  return (
    <Box>
      <Button color='inherit' onClick={() => setOpenSidePanel(!openSidePanel)}>
        <FavoriteBorderIcon fontSize="large" />
        {mounted && favoriteItems?.length > 0 && <Badge badgeContent={favoriteItems.length} color="info" overlap="circular" />}
      </Button>
      <SidePanel
        attributes={FavoriteSidePanelAttributes}
        open={openSidePanel}
        close={() => setOpenSidePanel(!openSidePanel)} />
    </Box >
  );
};

export default Favorites;
