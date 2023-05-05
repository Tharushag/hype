import Image from "next/image";
import ProductInfo from "./ProductInfo";

import watchImg from "../assets/watch.png";

import styles from "@/styles/product.module.scss";

function Product() {
  return (
    <div className={ styles['wrapper'] }>
      <div className={ styles['product'] }>
        <div className={ styles['product__imgbox'] }>
          <hr className={ styles['product__imgbox__hr'] } />
        </div>
        <ProductInfo />
      </div>
    </div>
  );
}

export default Product;
