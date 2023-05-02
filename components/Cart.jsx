import styles from "@/styles/cart.module.scss";

import Title from "./Title";
import CartCard from "./CartCard";
import TotalCard from "./TotalCard";

function Cart() {
  return (
    <>
      <div className={ styles['title'] }>
        <Title text="My cart" />
      </div>

      <div className={ styles['wrapper'] }>
        <div className={ styles['wrapper__cart'] }>
          <CartCard />
          <CartCard />
        </div>
        <TotalCard />
      </div>
    </>
  );
}

export default Cart;
