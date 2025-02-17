'use client';
import ProductCard from "@/src/components/ProductCard";
import { Product } from "@/src/components/types";
import styles from "./articles.module.css";

interface ArticlesProps {
    data: Product[];
}

const Articles = ({ data }: ArticlesProps) => {
    if (!data || data.length === 0) {
        return <div>No results found...</div>;
    }

    return (
        <div className={styles.page}>
            <main className={styles.row}>
                {data.map((item) => (
                    <ProductCard
                        key={item.id}
                        {...item}
                    />
                ))}
            </main>
        </div>
    );
};

export default Articles;