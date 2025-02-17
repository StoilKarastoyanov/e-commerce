'use client';
import { selectSelectedItem } from "@/src/redux/product/selectors";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import styles from "./product.module.css";
import AddToCard from "@/src/components/AddToCard";

const ProductPage = () => {
    const item = useSelector(selectSelectedItem);
    if (!item) throw new Error('No item selected');

    const sizeColor = item.size?.length ? 'text.primary' : 'error';
    const sizeMessage = item.size?.length ? item.size.join(', ') : 'out of stock';

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <img className={styles.img} src={item.image} alt={item.title} />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left', minWidth: '300px', padding: 4 }}>
                <Typography
                    gutterBottom variant="h2" component="div">{item.title}</Typography>
                <Typography gutterBottom variant="h3" component="div">{item.price}</Typography>
                <Typography gutterBottom variant="h5" component="div" color={sizeColor}>{sizeMessage}</Typography>
                <AddToCard />
            </Box>
        </Box>
    );
};

export default ProductPage;