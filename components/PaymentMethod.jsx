import { useContext } from "react";

import Button from "@mui/material/Button";
import Image from "next/image";
import { ProgressContext } from "./ProgressContext";
import { ThemeContext } from "./ThemeContext";

import googlePay from "../assets/google-pay.svg";
import paypal from "../assets/paypal.svg";
import applePay from "../assets/apple-pay.svg";

import styles from "@/styles/checkout.module.scss";

function PaymentMethod() {
  const { theme } = useContext(ThemeContext);
  const { setProgress } = useContext(ProgressContext);

  function handleProgress() {
    setProgress(100);
  }

  return (
    <div className={ `${styles['checkout_method']} ${styles['pay']}` }>
      <Button 
        className={ `${styles['pay__button']} ${theme === 'light' && styles['pay__button--border']}` } 
        variant="contained"
        onClick={ handleProgress }
      >
        <Image className={ `${styles['pay__image']} non-draggable` } src={ googlePay } alt="Google pay" />
      </Button>
      <Button 
        className={ `${styles['pay__button']} ${theme === 'light' && styles['pay__button--border']}` } 
        variant="contained"
        onClick={ handleProgress }
      >
        <Image className={ `${styles['pay__image']} non-draggable` } src={ paypal } alt="Google pay" />
      </Button>
      <Button 
        className={ `${styles['pay__button']} ${theme === 'light' && styles['pay__button--border']}` } 
        variant="contained"
        onClick={ handleProgress }
      >
        <Image className={ `${styles['pay__image']} non-draggable` } src={ applePay } alt="Google pay" />
      </Button>
    </div>
  );
}

export default PaymentMethod;
