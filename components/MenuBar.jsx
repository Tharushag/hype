import styles from "@/styles/checkout.module.scss";

function MenuBar() {
  return (
    <div className={ styles['menubar'] }>
      <hr className={ `${styles['menubar__hr']} border` } />
      <hr className={ `${styles['menubar__hr']} border` } />
    </div>
  );
}

export default MenuBar;
