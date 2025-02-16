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
import { CardProps } from '../types';
import { useRouter } from 'next/navigation';
import { setSelectedProductId, setReviwedProductIds } from '@/src/redux/product/slice';

const ProductCard = ({ id, title, price, image }: CardProps) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick = () => {
    dispatch(setSelectedProductId(id));
    dispatch(setReviwedProductIds(id));
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