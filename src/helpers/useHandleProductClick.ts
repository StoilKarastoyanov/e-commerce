import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../components/types";
import { selectRecentlyViewedItems } from "../redux/product/selectors";
import { addReviwedProduct, setSelectedProduct } from "../redux/product/slice";

export const useHandleProductClick = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const reviwedItems = useSelector(selectRecentlyViewedItems);

    return (item: Product) => {
        if (!item) return;

        dispatch(setSelectedProduct(item));

        if (!reviwedItems.some((reviewedItem) => reviewedItem.id === item.id)) {
            dispatch(addReviwedProduct(item));
        }

        const formattedTitle = item.title.replace(/\s+/g, "-");
        router.push(`/product/${item.id}-${formattedTitle}`);
    };
};
