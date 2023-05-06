import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import Share from "./Share";

import styles from "@/styles/product.module.scss";

function Product() {
  return (
    <div className={ styles['wrapper'] }>
      <div className={ styles['product'] }>
        <ProductImage />
        <ProductInfo />
        <Share />
      </div>
    </div>
  );
}

export default Product;
