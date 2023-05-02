import styles from "@/styles/cart.module.scss";

function createOptions(name, index) {
  if (name.includes("_title")) {
    name = name.split('_')[0];
    return <option disabled defaultValue={true} className='background' key={ index } value={ name }>{ name }</option>;
  }
  return <option className='background' key={ index } value={ name }>{ name }</option>;
}

function BasicSelect(props) {
  return (
    <select className={ `${styles['cart_details__options__select']} text` }>
      { props.items.map(createOptions) }
    </select>
  );
}

export default BasicSelect;
