import ProgressBar from "./ProgressBar";
import FormDropdown from "./FormDropdown";

import styles from "@/styles/checkout.module.scss";

function FormBox() {
  return (
    <div className={ styles['formbox'] }>
      <ProgressBar done="10%" />
      <FormDropdown />
      <FormDropdown />
    </div>
  );
}

export default FormBox;
