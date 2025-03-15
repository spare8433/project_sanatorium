import { useState } from "react";

type ChangeEventType = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

type UseInputType = <VT = unknown>(
  inputValue: VT,
) => [VT, (e: ChangeEventType) => void, React.Dispatch<React.SetStateAction<VT>>];

const useInput: UseInputType = <VT>(inputValue: VT) => {
  const [value, setValue] = useState<VT>(inputValue);

  const onChange = (e: ChangeEventType) => setValue(e.currentTarget.value as VT);

  return [value, onChange, setValue];
};

export default useInput;
