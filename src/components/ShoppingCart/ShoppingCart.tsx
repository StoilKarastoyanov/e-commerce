'use client';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import useClient from '@/src/helpers/useClient';
import { selectCartItems } from '@/src/redux/cart/selectors';
import { Badge, Box, Button } from '@mui/material';
import SidePanel from '../SidePanel/SidePanel';
import ShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { ShoppingCartSidePanelAttributes } from '../constants';

const ShoppingCart = () => {
  const cartItems = useSelector(selectCartItems);
  const [openSidePanel, setOpenSidePanel] = useState(false);
  const mounted = useClient()

  return (
    <Box>
      <Button color='inherit' onClick={() => setOpenSidePanel(!openSidePanel)}>
        <ShoppingCartIcon fontSize="large" />
        {mounted && cartItems?.length > 0 && <Badge badgeContent={cartItems.length} color="info" overlap="circular" />}
      </Button>
      <SidePanel
        attributes={ShoppingCartSidePanelAttributes}
        open={openSidePanel}
        close={() => setOpenSidePanel(!openSidePanel)}
      />
    </Box >
  )
};

export default ShoppingCart;

