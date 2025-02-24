import { addToCart } from '@/src/redux/cart/slice';
import { Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { CartItem } from '../types';

interface CardProps {
  item: CartItem;
  enabled: boolean
}

const AddToCard: React.FC<CardProps> = ({ item, enabled }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };

  return (
    <Button variant="contained" color="inherit" disabled={!enabled} onClick={handleAddToCart} sx={{ mt: 2 }}>
      <AddShoppingCartIcon />
    </Button>
  );
};

export default AddToCard;
