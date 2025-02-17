import { selectCartItems } from '@/src/redux/cart/selectors';
import { addToCart } from '@/src/redux/cart/slice';
import { selectSelectedItem } from '@/src/redux/product/selectors';
import { Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const AddToCard = () => {
  const dispatch = useDispatch();
  const item = useSelector(selectSelectedItem);
  if (!item) return null;

  const cartItems = useSelector(selectCartItems).length; // use it increase or decrease items in cart

  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };

  return (
    <Button variant="contained" color="inherit" onClick={handleAddToCart} sx={{ mt: 2 }}>
      <AddShoppingCartIcon />
    </Button>
  );
};

export default AddToCard;
