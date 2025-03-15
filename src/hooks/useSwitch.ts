import { useCallback, useState } from "react";

export default (defaultState: boolean): [boolean, () => void, () => void] => {
  const [isOn, setCurrentState] = useState(defaultState ?? false);

  const turnOn = useCallback(() => setCurrentState(true), []);
  const turnOff = useCallback(() => setCurrentState(false), []);

  return [isOn, turnOn, turnOff];
};
