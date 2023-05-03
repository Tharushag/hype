import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";

import Button from '@mui/material/Button';
import ClassicTextField from "./ClassicTextField";

import styles from "@/styles/checkout.module.scss";

function FormDropdown() {
  const { theme } = useContext(ThemeContext);
  const [billingInfoIsOpen, setBillingInfoIsOpen] = useState(false);

  function handleBillingInfoClick() {
    setBillingInfoIsOpen(!billingInfoIsOpen);
  }

  return (
    <div className={ styles['formdropdown'] }>
      <Button 
        style={ theme === 'light' ? {borderWidth: '2px'} : {} } 
        className={ `${styles['formdropdown__button']} text border` }
        onClick={ handleBillingInfoClick }
      >
        Billing information

        <div className={ styles['menubar'] }>
          <hr className={ `${styles['menubar__hr']} border` } />
          <hr className={ `${styles['menubar__hr']} border` } />
        </div>
      </Button>

      <div className={ `${styles['billinginfo_wrapper']} ${billingInfoIsOpen && styles['billinginfo_wrapper--open']}` }>
        <form className={ styles['billinginfo'] }>
          <ClassicTextField label="Full name" type="text" name="fullName" />
          <ClassicTextField label="Phone" type="text" name="phone" />
          <ClassicTextField label="Email" type="email" name="email" />
          <ClassicTextField label="Address" type="address" name="address" />
        </form>
      </div>
    </div>
  );
}

export default FormDropdown;
