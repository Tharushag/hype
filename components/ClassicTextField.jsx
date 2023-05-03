import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ClassicTextField(props) {
  const { theme } = useContext(ThemeContext);
  const { type, label, name } = props

  return (
    <div className="textfield textfield--focus-true">
      <label className="textfield__label textfield__label--focus-true text">{ label }</label>
      <input
        placeholder=' ' 
        className="textfield__input text" 
        type={ type } 
        style={ theme === 'dark' ? {borderBottom: '1px solid #EEEEEE'} : {borderBottom: '2px solid #222831'} }
        name={ name }
      />
    </div>
  );
}

export default ClassicTextField;
