import { useEffect, useState } from "react";

function useAuthValidation(input, length) {
  const [isValidate, setIsValidate] = useState(true);

  useEffect(() => {
    if (input.length === length) setIsValidate(false);
    else setIsValidate(true);
  }, [input]);

  return { isValidate };
}

function useCategoryValidation(form, length) {
  const [isValidate, setIsValidate] = useState(true);

  useEffect(() => {
    Object.values(form).every((str) => !(str === "") && str.length >= length)
      ? setIsValidate(true)
      : setIsValidate(false);
  }, [form]);

  return { isValidate };
}

export { useAuthValidation, useCategoryValidation };
