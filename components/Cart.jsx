import { products } from "@/pages/api/productData";

import Title from "./Title";
import CartCard from "./CartCard";
import TotalCard from "./TotalCard";

import styles from "@/styles/cart.module.scss";

function Cart() {
  function createCard(item, index) {
    return <CartCard key={ index } product={ item } />;
  }

  return (
    <>
      <div className={ styles['title'] }>
        <Title text="My cart" />
      </div>

      <div className={ styles['wrapper'] }>
        <div className={ styles['wrapper__cart'] }>
          { products.map(createCard) }
        </div>
        <TotalCard />
      </div>
    </>
  );
}

export default Cart;
