'use client'
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeItem } from '@/src/redux/cart/slice';
import { selectCartItems } from '@/src/redux/cart/selectors';
import { useHandleProductClick } from '@/src/helpers/useHandleProductClick';
import { List, ListItemAvatar, Avatar, ListItemText, Typography, ListItemButton, Button, Box, Drawer } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartItem } from '../types';
import Image from 'next/image';
import PanelHeader from './PanelHeader';

interface SidePanelProps {
    open: boolean
    close: () => void;
}

const ShoppingSidePanel: React.FC<SidePanelProps> = ({ open, close }) => {
    const dispatch = useDispatch();
    const items = useSelector(selectCartItems);
    const handleProductClick = useHandleProductClick();

    const handleRemoveItem = (itemToRemove: CartItem) => {
        dispatch(removeItem(itemToRemove))
    }

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <Drawer anchor='right' open={open} onClose={close} >
            <PanelHeader title='Shopping cart' closeAction={close} />
            {items.length > 0 ? <List sx={{ display: 'flex', flexDirection: 'column', bgcolor: 'background.paper', gap: 1, overflowX: 'hidden' }}>
                {items.map((item) => {
                    return (
                        <Box key={`${item.id}-${item.size}`} sx={{ display: 'flex', flexDirection: 'row' }}>
                            <ListItemButton component="a" onClick={() => handleProductClick(item)}>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Image src={item.image} alt={item.title} width={50} height={50} loading="lazy" />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={item.title} secondary={item.price} sx={{ maxWidth: 100 }} />
                                <ListItemText primary={`size: ${item.size}`} secondary={`quantity: ${item.quantity}`} />
                            </ListItemButton>
                            <Button variant="text" color="error" onClick={() => handleRemoveItem(item)}>
                                <DeleteIcon />
                            </Button>
                        </Box>
                    )
                })}
            </List> :
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 2, height: '100vh', padding: 4 }}>
                    <Image src={'/img/empty.jpg'} alt={'empty shopping cart'} width={276} height={302} loading="lazy" />
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 2, padding: 4 }}>
                        <Typography variant='h5' >Your cart is empty</Typography>
                        <Typography variant='body1' >{`Looks like you haven't made your choice yet...`}</Typography>
                    </Box>
                </Box>
            }
            {
                items.length > 0 && <Button color='error' onClick={handleClearCart}>
                    clear
                </Button>
            }
        </Drawer >
    );
};

export default ShoppingSidePanel;