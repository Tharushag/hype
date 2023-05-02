import ColorSwitch from "./ColorSwitch";
import BasicSelect from "./BasicSelect";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import styles from "@/styles/cart.module.scss";

function CartDetails() {
  return (
    <div className={ styles['cart_details'] }>
      <div className={ `${styles['cart_details__titlebox']} text` }>
        <h1 className={ styles['cart_details__title'] }>Bateman's watch</h1>
        <h1 className={ styles['cart_details__title'] }>$5</h1>
      </div>
      <p className={ `${styles['cart_details__description']} text` }>Make a statement with Bateman's Watch - because sometimes, it's all in the details.</p>

      <div className={ styles['cart_details__options'] }>
        <ColorSwitch />
        <BasicSelect items={ ['XL_title', 'XL', 'L', 'M', 'S'] } />
        <BasicSelect items={ ['qty_title', '1', '2', '3'] } />
      </div>

      <IconButton className={ styles['delete_btn'] } aria-label="delete" size="large">
        <DeleteIcon className={ styles['delete_btn__icon'] } fontSize="inherit" />
      </IconButton>
    </div>
  );
}

export default CartDetails;
