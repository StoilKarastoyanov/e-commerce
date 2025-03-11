import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteItem, removeFavoriteItem } from '@/src/redux/favorites/slice';
import { selectFavoriteItems } from '@/src/redux/favorites/selectors';
import { Button, Tooltip } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Product } from '../types';

interface FavoritesProps {
  item: Product;
}

const AddToFavorites: React.FC<FavoritesProps> = ({ item }) => {
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = React.useState(false);
  const favoriteItems = useSelector(selectFavoriteItems);

  React.useEffect(() => {
    const isLiked = favoriteItems.find(product => product.id === item.id) !== undefined;
    if (isLiked) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [favoriteItems, item.id]);

  const handleAddToFavorites = () => {
    if (!isFavorite) {
      dispatch(addFavoriteItem(item));
    } else {
      dispatch(removeFavoriteItem(item));
      setIsFavorite(false);
    }
  };

  return (
    <Tooltip title={!isFavorite ? "Add to favorite items" : "Remove from favorite items"} arrow>
      <span>
        <Button variant="text" color="inherit" onClick={handleAddToFavorites} sx={{ minWidth: 30 }} >
          {!isFavorite ? <FavoriteBorderIcon /> : <FavoriteIcon color='error' />}
        </Button>
      </span>
    </Tooltip>
  );
};

export default AddToFavorites;