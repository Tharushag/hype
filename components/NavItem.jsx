import styles from "@/styles/navbar.module.scss";

function NavItem(props) {
  const { href, name } = props;

  return (
    <li className={ styles['nav_item'] }>
      <a href={ href } className={ `${styles['nav_item__link']} text` }>{ name }</a>
      <div className={ `${styles['nav_item__box']} link-box` }></div>
    </li>
  );
}

export default NavItem;
