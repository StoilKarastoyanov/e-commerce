'use client'
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeItem } from '@/src/redux/cart/slice';
import { selectCartItems } from '@/src/redux/cart/selectors';
import { useHandleProductClick } from '@/src/helpers/useHandleProductClick';
import {
    List,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Typography,
    ListItemButton,
    Button,
    Box,
    Drawer,
    Divider
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartItem, Product, SidePanelAttributes } from '../types';
import Image from 'next/image';
import PanelHeader from './PanelHeader';
import { selectFavoriteItems } from '@/src/redux/favorites/selectors';
import { removeFavoriteItem } from '@/src/redux/favorites/slice';
import { DrawerListStyles, DrawerWrapper, EmptyListTextWrapper, EmptyListWrapper, ListContentWrapper } from './SidePanelStyles';

interface SidePanelProps {
    attributes: SidePanelAttributes;
    open: boolean;
    close: () => void;
}

const SidePanel: React.FC<SidePanelProps> = (props) => {
    const { attributes, open, close } = props;
    const dispatch = useDispatch();
    const itemsSelector = attributes.name === 'Shopping Cart' ? selectCartItems : selectFavoriteItems;
    const items = useSelector(itemsSelector);
    const handleProductClick = useHandleProductClick();

    const isCartItem = (item: CartItem | Product): item is CartItem => {
        return (item as CartItem).quantity !== undefined;
    };

    const handleRemoveItem = (itemToRemove: CartItem | Product) => {
        if (isCartItem(itemToRemove)) {
            dispatch(removeItem(itemToRemove));
        } else {
            dispatch(removeFavoriteItem(itemToRemove));
        }
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const DrawerList = (
        <Box sx={DrawerWrapper} role="presentation">
            <PanelHeader title={attributes.name} closeAction={close} />
            <Divider />
            {
                items.length > 0 ? <List sx={DrawerListStyles}>
                    {items.map((item) => {
                        return (
                            <Box key={`${item.id}-${item.size}`} sx={ListContentWrapper}>
                                <ListItemButton component="a" onClick={() => handleProductClick(item)}>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Image src={item.image} alt={item.title} width={50} height={50} loading="lazy" />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={item.title} secondary={item.price} sx={{ maxWidth: 100 }} />
                                    {isCartItem(item) &&
                                        <ListItemText primary={`size: ${item.size}`} secondary={`quantity: ${item.quantity}`} />}
                                </ListItemButton>
                                <Button variant="text" color="error" onClick={() => handleRemoveItem(item)}>
                                    <DeleteIcon />
                                </Button>
                            </Box>
                        )
                    })}
                </List> :
                    <Box sx={EmptyListWrapper}>
                        <Image src={attributes.image} alt={'empty shopping cart'} width={276} height={302} loading="lazy" />
                        <Box sx={EmptyListTextWrapper}>
                            <Typography variant='h5' >{attributes.title}</Typography>
                            <Typography variant='body1' align='center' >{attributes.subtitle}</Typography>
                        </Box>
                    </Box>
            }
            {
                items.length > 0 && <Button color='error' onClick={handleClearCart}>
                    clear
                </Button>
            }
        </Box>
    );

    return (
        <Drawer anchor='right' open={open} onClose={close} >
            {DrawerList}
        </Drawer >
    );
};

export default SidePanel;