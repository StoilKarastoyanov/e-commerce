'use client';
import * as React from 'react';
import { selectCartItems } from '@/src/redux/cart/selectors';
import ShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useSelector } from 'react-redux';
import { Badge, Box, Button } from '@mui/material';
import ShoppingSidePanel from './ShoppingSidePanel';
import { useEffect, useState } from 'react';

const ShoppingCart = () => {
  const cartItems = useSelector(selectCartItems);
  const [openSidePanel, setOpenSidePanel] = React.useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Box>
      <Button color='inherit' onClick={() => setOpenSidePanel(!openSidePanel)}>
        <ShoppingCartIcon fontSize="large" />
        {mounted && cartItems.length > 0 && <Badge badgeContent={cartItems.length} color="info" overlap="circular" />}
      </Button>
      <ShoppingSidePanel open={openSidePanel} close={() => setOpenSidePanel(!openSidePanel)} />
    </Box >
  )
};

export default ShoppingCart;

