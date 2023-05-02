import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";

import Image from "next/image";
import watchImg from "../assets/watch.png";

import CheckBox from "./CheckBox";
import CartDetails from "./CartDetails";

import styles from "@/styles/cart.module.scss";

function CartCard() {
  const { theme } = useContext(ThemeContext);
  const [check, setCheck] = useState(false);

  function handleCheck() {
    setCheck(!check);
  }

  return (
    <div style={ theme === 'light' ? {borderWidth: '2px'} : {} } className={ `${styles['cart']} border` }>
      <CheckBox onClick={ handleCheck } check={ check } />
      <Image src={ watchImg } className={ styles['cart__image'] } alt="product" />
      <CartDetails />
      <div onClick={ handleCheck } className={ `${styles['cart__overlay']} ${check && 'selected'}` } ></div>
    </div>
  );
}

export default CartCard;