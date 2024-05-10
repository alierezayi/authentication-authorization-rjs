import { useEffect, useState } from "react";

function useFormValidation(data, length) {
  const [isValidate, setIsValidate] = useState(false);

  useEffect(() => {
    if (typeof data === "string") {
      data.length === length ? setIsValidate(true) : setIsValidate(false);
    }
    if (typeof data === "object") {
      const values = Object.values(data);
      const isNotEmpty = values.every((value) => value);
      setIsValidate(isNotEmpty);
    }
  }, [data]);

  return { isValidate };
}

export default useFormValidation;
