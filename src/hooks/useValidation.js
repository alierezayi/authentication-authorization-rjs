import { useEffect, useState } from "react";

function useValidation(input, length) {
  const [isInvalid, setIsInvalid] = useState(true);

  useEffect(() => {
    if (input.length === length) setIsInvalid(false);
    else setIsInvalid(true);
  }, [input]);

  return { isInvalid };
}

export default useValidation;
