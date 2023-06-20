import { useState, useCallback, ChangeEvent } from "react";

type UseInputProps<T> = [
  value: T,
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void,
  reset: () => void
];

function useInput<T>(initialValue: T): UseInputProps<T> {
  const [value, setValue] = useState<T>(initialValue);

  const changeHandler = (e: ChangeEvent<HTMLInputElement> | any) => {
    if (e.target) setValue(e.target.value);
    else setValue(e);
  };

  const reset = useCallback(() => setValue(initialValue), [initialValue]);

  return [value, changeHandler, reset];
}

export default useInput;
