'use client';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { selectRecentlyViewedItems } from '@/src/redux/product/selectors';
import { List, ListItemText, ListItemAvatar, Avatar, ListItemButton } from '@mui/material';
import Image from 'next/image';

const RecentlyViewedItems = () => {
  const viewedItems = useSelector(selectRecentlyViewedItems);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <List sx={{ display: 'flex', flexDirection: 'row', width: '80%', bgcolor: 'background.paper', gap: 1, overflowX: 'hidden' }}>
      {mounted && viewedItems.map((item) => {
        return (
          <ListItemButton component={'a'} key={item.id} sx={{ minWidth: 300 }}>
            <ListItemAvatar>
              <Avatar>
                <Image src={item.image} alt={item.title} width={50} height={50} loading="lazy" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.title} secondary={item.price} />
          </ListItemButton>
        );
      })}
    </List>
  );
};

export default RecentlyViewedItems;