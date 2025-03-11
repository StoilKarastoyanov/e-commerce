import { useState, useEffect } from "react";
import { CartItem, Product } from "../components/types";

const useItem = (item: Product | undefined) => {
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

    return {
        itemToAdd,
        selectedSize,
        isItemReady,
        inStock,
        quantities,
        handleSelectSize,
        handleQuantityChange,
    }
}

export default useItem;