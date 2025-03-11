'use client';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addReviwedProduct, setSelectedProduct } from '@/src/redux/product/slice';
import { selectRecentlyViewedItems } from '@/src/redux/product/selectors';
import { useRouter } from 'next/navigation';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import ShareIcon from '@mui/icons-material/Share';
import Box from '@mui/material/Box';
import { CartItem } from '../types';
import AddToFavorites from '../AddToFavorites';
import AddToCart from '../AddToCart';
import useItem from '@/src/helpers/useItem';
import { ActionStyles, ButtonActionsStyles, CardStyles, SingleSizeStyles, SizeStales } from './ProductCardStyles';

const ProductCard = (item: CartItem) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const reviwedItems = useSelector(selectRecentlyViewedItems);
  const { id, title, price, size, image } = item;
  const { inStock, selectedSize, itemToAdd, isItemReady, handleSelectSize } = useItem(item);

  const handleClick = () => {
    dispatch(setSelectedProduct(item));

    if (!reviwedItems.some((reviewedItem) => reviewedItem.id === item.id)) {
      dispatch(addReviwedProduct(item));
    }

    router.push(`/product/${id}-${title.replace(/\s+/g, '-')}`);
  };

  return (
    <Card sx={{ width: 345 }}>
      <Box onClick={handleClick} sx={CardStyles}>
        <CardMedia component="img" image={image} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">{title}</Typography>
          <Typography variant="body2">{price}</Typography>
        </CardContent>
      </Box>
      <CardActions sx={ActionStyles}>
        {inStock ?
          <Box sx={SizeStales}>
            <Typography variant="h6" component="div">size:</Typography>
            {size.map((size, index) => {
              return (
                <Button
                  key={index}
                  variant="outlined"
                  color={selectedSize === size ? 'primary' : 'secondary'}
                  sx={SingleSizeStyles}
                  onClick={handleSelectSize}
                >
                  {size}
                </Button>
              )
            })
            }
          </Box>
          : <Typography variant="h6" component="div" color="error" paddingLeft={1.5}>out of stock</Typography>
        }
        <Box id='card-actions' sx={ButtonActionsStyles}>
          <AddToCart item={itemToAdd} enabled={isItemReady} parent="card" />
          <AddToFavorites item={item} />
          <Button color="inherit" sx={{ minWidth: 30 }}>
            <ShareIcon />
          </Button>
        </Box>
      </CardActions>
    </Card >
  );
};

export default ProductCard;
