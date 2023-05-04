import { products } from "../src/pages/api/productData";

import Title from "./Title";
import ProductCard from "./ProductCard";

import styles from "@/styles/products.module.scss";

function ProductList() {
  function createProductCard(item, index) {
    return <ProductCard key={ index } img={ item.image } description={ item.description } price={ item.price } />;
  }

  return (
    <>
      <Title text="Discover more products!" />

      <div className={ styles['product_box'] }>
        { products.map(createProductCard) }
      </div>
    </>
  );
}

export default ProductList;
