import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

import ColorSwitch from "./ColorSwitch";
import ClassicSelect from "./ClassicSelect";
import Button from '@mui/material/Button';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import styles from "@/styles/product.module.scss";

function ProductInfo() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={ styles['product__info'] }>
      <div className={ styles['stock'] }>Out of stock</div>
      <h1 className={ `${styles['product__info__title']} text` }>Batman's watch</h1>
      <h1 className={ `${styles['product__info__title']} text` }>$5</h1>
      <p 
        className={ `${styles['product__info__description']} text 
        ${ theme === 'light' && styles['product__info__description--weight-regular'] }` }
      >
        Make a statement with Bateman's Watch - because sometimes, it's all in the details.
      </p>

      <div className={ styles['product__info__customization'] }>
        <ColorSwitch />
        <ClassicSelect items={ ['size_title', 'XL', 'L', 'M', 'S'] } />
        <ClassicSelect items={ ['qty_title', '1', '2', '3', '4'] } />
      </div>

      <div className={ styles['product__info__button'] }>
        <Button variant="contained" className={`${styles['product__info__button__buy']}`}>Buy now</Button>
        <Button 
          variant="outlined" 
          className={`${styles['product__info__button__cart']} 
          ${theme === 'light' && styles['product__info__button__cart--theme-light']} 
          border text`}
        >
          <ShoppingCartOutlinedIcon className='text' /> Add to cart
        </Button>
      </div>
    </div>
  );
}

export default ProductInfo;
