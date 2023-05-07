import Link from 'next/link';
import Button from '@mui/material/Button';

import styles from "@/styles/cart.module.scss";

function TotalCard() {
  return (
    <div className={ `${styles['cart_total']} text border` }>
      <div className={ styles['cart_total__row'] }>
        <p>Subtotal</p>
        <p>$10</p>
        <p>Tax</p>
        <p>5%</p>
        <p>Shipping</p>
        <p>$0</p>
      </div>

      <hr className={`${styles['cart_total__hr']} border`} />

      <div className={ `${styles['cart_total__row']} ${styles['cart_total__row_bold']}` }>
        <p>Total</p>
        <p>$10.50</p>
      </div>
      <Link href='/checkout' className={ styles['cart_total__checkout_link'] }>
        <Button variant="contained" className={`${styles['cart_total__checkout_btn']} checkout_btn`}>Checkout</Button>
      </Link>
    </div>
  );
}

export default TotalCard;
