import Image from "next/image";

import watchImg from "../assets/watch.png"; 
import mugImage from "../assets/mug.jpg"; 
import phoneImg from "../assets/phone.jpg"; 
import shoeImg from "../assets/shoe.jpg"; 

import styles from "@/styles/checkout.module.scss";

function CartSummary() {
  return (
    <div className={ styles['cartsummary'] }>
      <div className={ styles['summary'] } >
        <Image src={ shoeImg } className={ styles['summary__image'] } alt="product 1" priority />
        <Image src={ watchImg } className={ styles['summary__image'] } alt="product 2" priority />
        <Image src={ phoneImg } className={ styles['summary__image'] } alt="product 3" priority />
        <Image src={ mugImage } className={ styles['summary__image'] } alt="product 4" priority />
      </div>

      <div className={ `${styles['total']} text` }>
        <label className={ styles['total__label'] }>Total</label>
        <p className={ styles['total__price'] }>$50</p>
      </div>
    </div>
  );
}

export default CartSummary;
