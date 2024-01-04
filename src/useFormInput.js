import { useState } from "react";

// custom hooks for input form that handles onChange
export function useFormInput(def) {
  const [value, setValue] = useState(def)

  function handleChange(e) {
    setValue(e.target.value);
  }

  const inputProps = {
    value: value,
    onChange: handleChange
  } 

  return inputProps;

}
