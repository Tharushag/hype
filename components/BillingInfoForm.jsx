import { useContext, useState, useEffect } from "react";

import { ProgressContext } from "./ProgressContext";

import ClassicTextField from "./ClassicTextField";

import styles from "@/styles/checkout.module.scss";

function BillingInfoForm() {
  const { setProgress } = useContext(ProgressContext);

  const [input, setInput] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: ""
  });

  const [completedAmount, setCompletedAmount] = useState({
    fullName: 0,
    phone: 0,
    email: 0,
    address: 0
  });

  useEffect(() => {
    let total = Object.values(completedAmount).reduce((accumulator, currentValue) => accumulator + currentValue);
    setProgress(total);
  }, [completedAmount, setProgress]);

  function handleProgress(name, value) {
    let completePoints = 0;
    if (value.length > 0) {
      completePoints = 20; // When an input is completed it corresponds to 20% progress
    }

    setCompletedAmount((previousValues) => {
      return {
        ...previousValues,
        [name]: completePoints
      };
    })
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setInput((previousValues) => {
      return {
        ...previousValues,
        [name]: value
      };
    });

    handleProgress(name, value);
  }

  return (
    <form className={ styles['checkout_method'] }>
      <ClassicTextField label="Full name" type="text" name="fullName" onInput={ handleChange } value={ input.fullName } />
      <ClassicTextField label="Phone" type="text" name="phone" onInput={ handleChange } value={ input.phone } />
      <ClassicTextField label="Email" type="email" name="email" onInput={ handleChange } value={ input.email } />
      <ClassicTextField label="Address" type="address" name="address" onInput={ handleChange } value={ input.address } />
    </form>
  );
}

export default BillingInfoForm;
