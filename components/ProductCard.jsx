import { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import styles from "@/styles/product-list.module.scss";

function ProductCard(props) {
  const {img, price, description} = props;

  const [inCart, setInCart] = useState(false);

  function handleClick() {
    setInCart(!inCart);
  }

  return (
    <div className={ `${styles['product']} ${styles['product--hover']}` }>
      <Link href='/products' className={ styles['product__link'] }> 
        <Image src={ img } className={ `${styles['product__image']} non-draggable` } alt="Product image" priority />
      </Link> 
      <div className={ `${styles['product__info']} ${styles['product__info--open']}` }>
        <p className={ styles['product__info__text'] }>{ price }</p>

        <p className={ styles['product__info__text'] }>
          { description.slice(0, 13) + '...' }
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
