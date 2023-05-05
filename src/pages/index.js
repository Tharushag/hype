import { useContext } from "react";
import { ThemeContext } from "../../components/ThemeContext";

import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import MainProduct from "../../components/MainProduct";
import ProductList from "../../components/ProductList";

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Header />

      <div className={ theme }>
        <div className='background wrapper'>
          <Navbar />
          <MainProduct />
          <ProductList />
        </div>
      </div>
    </>
  )
}
