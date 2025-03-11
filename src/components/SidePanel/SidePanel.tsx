'use client'
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeItem } from '@/src/redux/cart/slice';
import { clearFavorites, removeFavoriteItem } from '@/src/redux/favorites/slice';
import { selectCartItems } from '@/src/redux/cart/selectors';
import { selectFavoriteItems } from '@/src/redux/favorites/selectors';
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
import {
    DrawerListStyles,
    DrawerWrapper,
    EmptyListTextWrapper,
    EmptyListWrapper,
    ListContentWrapper,
    SizeQuantityStyles,
    TitlePriceStyles
} from './SidePanelStyles';

interface SidePanelProps {
    attributes: SidePanelAttributes;
    open: boolean;
    close: () => void;
}

const SidePanel: React.FC<SidePanelProps> = ({ attributes, open, close }) => {
    const dispatch = useDispatch();
    const handleProductClick = useHandleProductClick();

    const itemsSelector = attributes.name === 'Shopping Cart' ? selectCartItems : selectFavoriteItems;

    const items = useSelector(itemsSelector);
    const hasItems = items.length > 0;

    const handleRemoveItem = (itemToRemove: CartItem | Product) => {
        if ('quantity' in itemToRemove) {
            dispatch(removeItem(itemToRemove));
        } else {
            dispatch(removeFavoriteItem(itemToRemove));
        }
    };

    const handleClearCart = () => {
        dispatch(attributes.name === 'Shopping Cart' ? clearCart() : clearFavorites());
    };

    const renderItemsList = () => (
        <List sx={DrawerListStyles}>
            {items.map((item) => (
                <Box key={`${item.id}-${item.size}`} sx={ListContentWrapper}>
                    <ListItemButton component="a" onClick={() => handleProductClick(item)}>
                        <ListItemAvatar>
                            <Avatar>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={50}
                                    height={50}
                                    loading="lazy"
                                />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={item.title} secondary={item.price} sx={TitlePriceStyles} />
                        {'quantity' in item ? (
                            <ListItemText
                                primary={`Size: ${item.size}`}
                                secondary={`Quantity: ${item.quantity}`}
                                sx={SizeQuantityStyles}
                            />
                        ) : (
                            <Typography variant="body1" color={item.size ? 'textPrimary' : 'error'}>
                                {item.size ? item.price : 'out of stock'}
                            </Typography>
                        )}
                    </ListItemButton>
                    <Button variant="text" color="error" onClick={() => handleRemoveItem(item)}>
                        <DeleteIcon />
                    </Button>
                </Box>
            ))}
        </List>
    );

    return (
        <Drawer anchor="right" open={open} onClose={close}>
            <Box sx={DrawerWrapper} role="presentation">
                <PanelHeader title={attributes.name} closeAction={close} />
                <Divider />
                {hasItems ? (
                    renderItemsList()
                ) : (
                    <Box sx={EmptyListWrapper}>
                        <Image src={attributes.image} alt="empty shopping cart" width={276} height={302} loading="lazy" />
                        <Box sx={EmptyListTextWrapper}>
                            <Typography variant="h5">{attributes.title}</Typography>
                            <Typography variant="body1" align="center">
                                {attributes.subtitle}
                            </Typography>
                        </Box>
                    </Box>
                )}
                {hasItems && (
                    <Button color="error" onClick={handleClearCart}>
                        Clear
                    </Button>
                )}
            </Box>
        </Drawer>
    );
};

export default SidePanel;
