import * as React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/src/redux/cart/slice';
import { Button, Tooltip } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { CartItem } from '../types';

interface CartProps {
  item: CartItem;
  enabled: boolean;
  parent: 'header' | 'card'
}

const AddToCart: React.FC<CartProps> = ({ item, enabled, parent }) => {
  const dispatch = useDispatch();
  const variant = parent === 'header' ? 'contained' : 'text';

  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };

  return (
    <Tooltip title={!enabled ? "Select size first" : "Add to shopping cart"} arrow>
      <span>
        <Button variant={variant} color="inherit" disabled={!enabled} onClick={handleAddToCart} sx={{ minWidth: 30 }}>
          <AddShoppingCartIcon />
        </Button>
      </span>
    </Tooltip >
  );
};

export default AddToCart;
