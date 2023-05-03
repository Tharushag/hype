import { useState } from "react";
import Image from "next/image";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styles from "@/styles/products.module.scss";
import watchImg from "../assets/watch.png";

function ProductCard() {
  const [inCart, setInCart] = useState(false);

  function handleClick() {
    setInCart(!inCart);
  }

  return (
    <div className={ `${styles['product']} ${styles['product--hover']}` }>
      <a href='/product' className={ styles['product__link'] }> 
        <Image src={ watchImg } className={ `${styles['product__image']} non-draggable` } alt="Product image" priority />
      </a> 
      <div className={ `${styles['product__info']} ${styles['product__info--open']}` }>
        <p className={ styles['product__info__text'] }>$5</p>

        <p className={ styles['product__info__text'] }>
          {'Bateman\'s watch'.slice(0, 13) + '...'}
        </p>

        <div className={ `${styles['product__info__icon']} ${inCart && styles['icon_box--cart']}` } onClick={ handleClick }>
          <ShoppingCartOutlinedIcon 
            className={ `${styles['product__info__text']} ${styles['shopping_cart']} ${inCart && styles['icon--cart']}` } 
          />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
