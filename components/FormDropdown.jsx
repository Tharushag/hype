import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";

import MenuBar from "./MenuBar";
import Button from '@mui/material/Button';

import styles from "@/styles/checkout.module.scss";

function FormDropdown(props) {
  const  { children } = props;

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
        { props.title }

        <MenuBar />
      </Button>

      <div className={ `${styles['form_wrapper']} ${billingInfoIsOpen && styles['form_wrapper--open']}` }>
        { children }
      </div>
    </div>
  );
}

export default FormDropdown;
