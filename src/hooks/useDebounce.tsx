import { useEffect, useState } from "react";

const useDebounce = (input = "", time = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(input);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(input);
    }, time);

    return () => {
      clearTimeout(timeout);
    };
  }, [input, time]);

  return { debouncedValue };
};

export default useDebounce;
