import { getData } from "@/src/helpers/file-helpers";
import ProductCard from "@/src/components/ProductCard";
import { CardProps, CategoryType } from "@/src/components/types";
import styles from "./page.module.css";

interface ArticlesProps {
    category: CategoryType;
}

const Artucles = ({ category }: ArticlesProps) => {
    const data = getData(category);
    if (!data) {
        return <div>No results found...</div>;
    }

    return (
        <div className={styles.page}>
            <main className={styles.row}>
                {data.map(({ id, title, price, image }: CardProps) => (
                    <ProductCard
                        key={id}
                        title={title}
                        price={price}
                        image={image}
                    />
                ))}
            </main>
        </div>
    );
};

export default Artucles;
