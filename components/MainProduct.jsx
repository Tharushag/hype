import styles from "@/styles/main-product.module.scss";
import Button from '@mui/material/Button';
import EastIcon from '@mui/icons-material/East';
import watchImg from '../assets/watch.png'
import Image from "next/image";

function MainProduct() {
  return (
    <div className={ styles['product'] }>
      <div className={ styles['product__description'] }>
        <h1 className={ `${styles['product__title']} text` }>Bateman's <br/> watch - $5</h1>
        <p className={ `${styles['product__info']} text` }>Make a statement with Bateman's Watch - because sometimes, it's all in the details.</p>
        <a href='/products'>
          <Button className={ `${styles['product__buy']} ${styles['product__buy-hover']} text border` } variant="outlined">
            Buy now <EastIcon className={ styles['product__arrow'] } />
          </Button>
        </a>
      </div>
      <Image src={ watchImg } className={ styles['product__image'] } alt="Watch" />
    </div>
  );
}

export default MainProduct;
