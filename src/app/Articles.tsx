'use client';
import ProductCard from "@/src/components/ProductCard";
import { CardProps } from "@/src/components/types";
import styles from "./page.module.css";

interface ArticlesProps {
    data: CardProps[];
}

const Articles = ({ data }: ArticlesProps) => {
    if (!data || data.length === 0) {
        return <div>No results found...</div>;
    }

    return (
        <div className={styles.page}>
            <main className={styles.row}>
                {data.map(({ id, title, price, image }: CardProps) => (
                    <ProductCard
                        key={id}
                        id={id}
                        title={title}
                        price={price}
                        image={image}
                    />
                ))}
            </main>
        </div>
    );
};

export default Articles;