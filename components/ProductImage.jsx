import Image from "next/image";

import watchImg from "../assets/watch.png";

import styles from "@/styles/product.module.scss";

function ProductImage() {
  return (
    <>
      <div className={ styles['product__imgbox'] }>
        <Image alt="Bateman's watch" src={ watchImg } className={ styles['product__imgbox__img'] } fill />
      </div>
      <div className={ styles['product__carousal'] }>
        <div 
          className={ `${styles['product__carousal__slide']} ${styles['product__carousal__slide--active']} theme__switch-color` }
        />
        <div className={ `${styles['product__carousal__slide']} theme__switch-color` } />
        <div className={ `${styles['product__carousal__slide']} theme__switch-color` } />
      </div>
      <hr className={ styles['product__hr'] } />
    </>
  );
}

export default ProductImage;
