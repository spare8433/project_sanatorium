import { useState } from "react";

type UseInputType = <VT = unknown>(
  inputValue: VT,
) => [
  VT,
  (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void,
  React.Dispatch<React.SetStateAction<VT>>,
];

const useInput: UseInputType = <VT>(inputValue: VT) => {
  const [value, setValue] = useState<VT>(inputValue);

  // const onChange = ;

  return [value, (e) => setValue(e.currentTarget.value as VT), setValue];
};

export default useInput;
