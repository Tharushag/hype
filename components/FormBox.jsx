import { useContext } from "react";
import { ProgressContext } from "./ProgressContext";

import ProgressBar from "./ProgressBar";
import FormDropdown from "./FormDropdown";
import BillingInfoForm from "./BillingInfoForm";


import styles from "@/styles/checkout.module.scss";

function FormBox() {
  const { progress } = useContext(ProgressContext);

  return (
    <div className={ styles['formbox'] }>
      <ProgressBar done={`${progress}%`} />
      <FormDropdown title="Billing information">
        <BillingInfoForm />
      </FormDropdown>
      <FormDropdown title="Payment method" />
    </div>
  );
}

export default FormBox;
