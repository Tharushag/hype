import { useContext } from "react";
import { ProgressContext } from "./ProgressContext";

import ProgressBar from "./ProgressBar";
import FormDropdown from "./FormDropdown";
import BillingInfoForm from "./BillingInfoForm";
import PaymentMethod from "./PaymentMethod";

import styles from "@/styles/checkout.module.scss";

function FormBox() {
  const { progress } = useContext(ProgressContext);

  return (
    <div className={ styles['formbox'] }>
      <ProgressBar done={`${progress}%`} />

      <FormDropdown title="Billing information">
        <BillingInfoForm />
      </FormDropdown>

      <FormDropdown title="Payment method">
        <PaymentMethod />
      </FormDropdown>
    </div>
  );
}

export default FormBox;
