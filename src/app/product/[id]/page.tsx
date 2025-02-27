'use client';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectSelectedItem } from "@/src/redux/product/selectors";
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import AddToCard from "@/src/components/AddToCard";
import { CartItem } from "@/src/components/types";
import styles from "./product.module.css";

const ProductPage = () => {
    const item = useSelector(selectSelectedItem);

    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [isItemReady, setIsItemReady] = useState<boolean>(false);
    const [itemToAdd, setItemToAdd] = useState<CartItem>({
        id: item?.id || "",
        title: item?.title || "",
        price: item?.price || "",
        image: item?.image || "",
        size: [],
        quantity: 1,
    });

    const inStock = item && item?.size?.length > 0;
    const quantities = [1, 2, 3, 4, 5];

    const handleSelectSize = (event: React.MouseEvent<HTMLButtonElement>) => {
        const target = event.target as HTMLButtonElement;
        const newSize = target.innerText;

        setSelectedSize((prevSize) => (prevSize === newSize ? null : newSize));

        setItemToAdd((prevItem) => ({
            ...prevItem,
            size: prevItem.size.includes(newSize) ? [] : [newSize],
        }));
    };


    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newQuantity = parseInt(event.target.value, 10);
        setItemToAdd((prevItem) => ({
            ...prevItem,
            quantity: newQuantity,
        }));
    };

    useEffect(() => {
        setIsItemReady(itemToAdd.size.length > 0);
    }, [itemToAdd.size]);


    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexGrow: 1, overflow: 'hidden' }}>
            <img className={styles.img} src={itemToAdd.image} alt={itemToAdd.title} loading="lazy" />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left', minWidth: '300px', padding: 4 }}>
                <Typography
                    gutterBottom variant="h2" component="div">{itemToAdd.title}</Typography>
                {inStock ? <>
                    <Typography gutterBottom variant="h3" component="div">{itemToAdd.price}</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1 }}>
                        <Typography variant="h6" component="div">select size:</Typography>
                        {item.size.map((size, index) => {
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
                    <AddToCard item={itemToAdd} enabled={isItemReady} />
                </> : <Typography gutterBottom variant="h3" component="div" color="error">out of stock</Typography>}

            </Box>
        </Box>
    );
};

export default ProductPage;