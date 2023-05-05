import { useContext } from "react";
import { ThemeContext } from "../../components/ThemeContext";

import Cart from "../../components/Cart";

import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Header />

      <div className={ theme }>
        <div className='background wrapper'>
          <Navbar />
          <Cart />
        </div>
      </div>
    </>
  )
}
