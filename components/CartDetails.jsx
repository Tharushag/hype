import ColorSwitch from "./ColorSwitch";
import ClassicSelect from "./ClassicSelect";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import styles from "@/styles/cart.module.scss";

function CartDetails(props) {
  const { title, price, description } = props.product;

  return (
    <>
      <div className={ styles['cart_details'] }>
        <div className={ styles['cart_details__titlebox']}>
          <h1 className={ `${styles['cart_details__title']} text` }>{ title }</h1>
        </div>
        <p className={ `${styles['cart_details__description']} text` }>{ description }</p>

        <div className={ styles['cart_details__options'] }>
          <ColorSwitch />
          <ClassicSelect items={ ['XL_title', 'XL', 'L', 'M', 'S'] } />
          <ClassicSelect items={ ['qty_title', '1', '2', '3'] } />
        </div>
      </div>

      <div className={ styles['cart-edge'] }>
        <h1 className={ `${styles['cart_details__title']} ${styles['cart-edge__h1']} text` }>{ price }</h1>

        <IconButton className={ styles['delete_btn'] } aria-label="delete" size="large">
          <DeleteIcon className={ styles['delete_btn__icon'] } fontSize="inherit" />
        </IconButton>
      </div>
    </>
  );
}

export default CartDetails;
