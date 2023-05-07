import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import NavItem from "./NavItem";

import styles from "@/styles/navbar.module.scss";

function Navbar() {
  return (
    <nav className={ styles['navbar'] }>
      <Link href='/' className={ styles['navbar__logo'] }>HY<br/>PE</Link>

      <ul className={ styles['nav_list'] }>
        <ThemeSwitch />
        <NavItem href='/cart' name="CART" />
        <NavItem href='/checkout' name="CHECKOUT" />
      </ul>
    </nav>
  );
}

export default Navbar;
