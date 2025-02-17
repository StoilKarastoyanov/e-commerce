'use client';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Product } from '../types';
import { useRouter } from 'next/navigation';
import { setSelectedProductId, setReviwedProductIds } from '@/src/redux/product/slice';

const ProductCard = (item: Product) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id, title, price, size, image } = item;

  const handleClick = () => {
    dispatch(setSelectedProductId(item));
    dispatch(setReviwedProductIds(item));
    router.push(`/product/${id}-${title.replace(/\s+/g, '-')}`);
  };

  return (
    <Card sx={{ width: 345 }}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          component="img"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="body2" component="div" color={size?.length ? 'text.primary' : 'error'}>
            {size?.join(', ') || "out of stock"}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;