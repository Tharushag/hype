import styles from "@/styles/products.module.scss";

function Products() {
  return (
    <div className={ styles['products'] }>
      <div className='title'>
        <h1 className='text title__text'>Discover more products!</h1>
        <hr className='border title__line' />
      </div>
    </div>
  );
}

export default Products;
