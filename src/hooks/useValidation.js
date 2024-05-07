import { useEffect, useState } from "react";

function useAuthValidation(input, length) {
  const [isValidate, setIsValidate] = useState(false);

  useEffect(() => {
    if (input.length === length) setIsValidate(true);
    else setIsValidate(false);
  }, [input]);

  return { isValidate };
}

function useCategoryValidation(form, length) {
  const [isValidate, setIsValidate] = useState(false);

  useEffect(() => {
    Object.values(form).every((str) => !(str === "") && str.length >= length)
      ? setIsValidate(true)
      : setIsValidate(false);
  }, [form]);

  return { isValidate };
}

export { useAuthValidation, useCategoryValidation };
