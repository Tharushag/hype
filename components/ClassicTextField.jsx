import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ClassicTextField(props) {
  const { type, label, name, value, onInput } = props

  const { theme } = useContext(ThemeContext);

  return (
    <div className="textfield textfield--focus-true">
      <label className="textfield__label textfield__label--focus-true text">{ label }</label>
      <input
        placeholder=' ' 
        className="textfield__input text" 
        type={ type } 
        style={ theme === 'dark' ? {borderBottom: '1px solid #EEEEEE'} : {borderBottom: '2px solid #222831'} }
        name={ name }
        value = { value }
        onChange={ onInput }
      />
    </div>
  );
}

export default ClassicTextField;
