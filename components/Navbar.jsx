import styles from "@/styles/navbar.module.scss";
import ThemeSwitch from "./ThemeSwitch";
import NavItem from "./NavItem";

function Navbar() {
  return (
    <nav className={ styles['navbar'] }>
      <a href='/' className={ styles['navbar__logo'] }>HY<br/>PE</a>

      <ul className={ styles['nav_list'] }>
        <ThemeSwitch />
        <NavItem href='/cart' name="CART" />
        <NavItem href='/checkout' name="CHECKOUT" />
      </ul>
    </nav>
  );
}

export default Navbar;
