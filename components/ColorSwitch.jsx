import { useState } from "react";

import styles from "@/styles/cart.module.scss";

function ColorSwitch() {
  const colorList = [['black', 'white'], ['#4F200D', 'white']];
  const [colorIndex, setColorIndex] = useState(0);

  function handleClick() {
    if (colorIndex === (colorList.length - 1)) {
      setColorIndex(0);
    } else {
      setColorIndex(colorIndex + 1);  
    }
  }

  return (
    <div className={ styles['cart_details__options__color_switch'] } onClick={ handleClick }>
      <div style={{backgroundColor: colorList[colorIndex][0]}} className={ styles['cart_details__options__color_switch__color'] } />
      <div style={{backgroundColor: colorList[colorIndex][1]}} className={ styles['cart_details__options__color_switch__color'] } />
    </div>
  );
}

export default ColorSwitch;
