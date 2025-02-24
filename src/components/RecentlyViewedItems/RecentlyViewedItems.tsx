'use client';
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { selectRecentlyViewedItems } from '@/src/redux/product/selectors';
import Image from 'next/image';

const RecentlyViewedItems = () => {
  const viewedItems = useSelector(selectRecentlyViewedItems);
  return (
    <List sx={{ display: 'flex', flexDirection: 'row', width: '80%', bgcolor: 'background.paper', gap: 1, overflowX: 'hidden' }}>
      {viewedItems.map((item) => {
        return (
          <ListItem key={item.id} sx={{ minWidth: 300 }}>
            <ListItemAvatar>
              <Avatar>
                <Image src={item.image} alt={item.title} width={50} height={50} loading="lazy" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.title} secondary={item.price} />
          </ListItem>
        );
      })}
    </List>
  );
};

export default RecentlyViewedItems;