'use client';
import { useSelector } from "react-redux";
import useItem from "@/src/helpers/useItem";
import { selectSelectedItem } from "@/src/redux/product/selectors";
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import AddToCart from "@/src/components/AddToCart";
import styles from "./product.module.css";
import AddToFavorites from "@/src/components/AddToFavorites";

const ProductPage = () => {
    const item = useSelector(selectSelectedItem);
    if (!item) throw new Error('Item is not defined');
    const { itemToAdd, inStock, quantities, isItemReady, selectedSize, handleSelectSize, handleQuantityChange } = useItem(item);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexGrow: 1, overflow: 'hidden' }}>
            <img className={styles.img} src={itemToAdd.image} alt={itemToAdd.title} loading="lazy" />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left', minWidth: '300px', padding: 4 }}>
                <Typography
                    gutterBottom variant="h2" component="div">{itemToAdd.title}<AddToFavorites item={item} /></Typography>


                {inStock ? <>
                    <Typography gutterBottom variant="h3" component="div">{itemToAdd.price}</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1 }}>
                        <Typography variant="h6" component="div">select size:</Typography>
                        {item?.size.map((size, index) => {
                            return (
                                <Button
                                    key={index}
                                    variant="outlined"
                                    color={selectedSize === size ? 'primary' : 'secondary'}
                                    sx={{ fontWeight: 'bold', padding: 0, minWidth: 40 }}
                                    onClick={handleSelectSize}
                                >
                                    {size}
                                </Button>
                            )
                        })
                        }
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1 }}>
                        <Typography variant="h6" component="div">quantity:</Typography>
                        <TextField
                            type="number"
                            variant="outlined"
                            value={itemToAdd.quantity}
                            onChange={handleQuantityChange}
                            sx={{ width: 60, margin: 1 }}
                            slotProps={{
                                htmlInput: {
                                    min: 1, // Sets the minimum value to 1
                                },
                            }}
                        >
                            {quantities.map((qty) => (
                                <MenuItem key={qty} value={qty}>
                                    {qty}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                    <AddToCart item={itemToAdd} enabled={isItemReady} parent="header" />
                </> : <Typography gutterBottom variant="h3" component="div" color="error">out of stock</Typography>}
            </Box>
        </Box>
    );
};

export default ProductPage;