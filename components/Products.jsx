import Title from "./Title";
import ProductCard from "./ProductCard";
import styles from "@/styles/products.module.scss";

function Products() {
  return (
    <>
      <Title text="Discover more products!" />

      <div className={ styles['product_box'] }>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
}

export default Products;
