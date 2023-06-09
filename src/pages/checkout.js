import { useContext } from "react";
import { ThemeContext } from "../../components/ThemeContext";

import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import CartSummary from "../../components/CartSummary";
import FormBox from "../../components/FormBox";

import styles from "@/styles/checkout.module.scss";

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Header />

      <div className={ theme }>
        <div className='background wrapper'>
          <Navbar />
          <div className={ styles['wrapper'] }>
            <CartSummary />
            <FormBox />
          </div>
        </div>
      </div>
    </>
  )
}
