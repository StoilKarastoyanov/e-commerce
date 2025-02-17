'use client';
import * as React from 'react';
import { selectCartItems } from '@/src/redux/cart/selectors';
import ShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { Badge, Box, Button } from '@mui/material';
import { clearCart } from '@/src/redux/cart/slice';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <Box>
      <Button color='inherit'>
        <ShoppingCartIcon fontSize="large" />
        {cartItems.length && <Badge badgeContent={cartItems.length} color="info" overlap="circular" />}
      </Button>
      {cartItems.length > 0 && <Button color='error' onClick={handleClearCart}>
        clear
      </Button>}
    </Box>
  )
};

export default ShoppingCart;

