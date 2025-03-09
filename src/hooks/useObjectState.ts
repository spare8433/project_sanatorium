/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

type UseObjectStateType = <OT extends Record<string, any>>(
  obj: OT,
) => [OT, (key: keyof OT, value: OT[keyof OT]) => void];

const useObjectState: UseObjectStateType = <OT extends Record<string, any>>(obj: OT) => {
  const [state, setState] = useState<OT>(obj);

  const updateObject = (key: keyof OT, value: OT[keyof OT]) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  return [state, updateObject];
};

export default useObjectState;
