import { useContext, useState } from "react";

import Image from "next/image";

import CheckBox from "./CheckBox";
import CartDetails from "./CartDetails";

import styles from "@/styles/cart.module.scss";

function CartCard(props) {

  const [check, setCheck] = useState(false);

  function handleCheck() {
    setCheck(!check);
  }

  return (
    <div className={ `${styles['cart']} border` }>
      <CheckBox onClick={ handleCheck } check={ check } />
      <Image src={ props.product.image } className={ styles['cart__image'] } alt="product" priority />
      <CartDetails product={ props.product } />
      <div onClick={ handleCheck } className={ `${styles['cart__overlay']} ${check && 'selected'}` } ></div>
    </div>
  );
}

export default CartCard;
