import { useState } from "react";

export default (defaultState: boolean): [boolean, () => void, () => void] => {
  const [isOn, setCurrentState] = useState(defaultState ?? false);

  const turnOn = () => setCurrentState(true);
  const turnOff = () => setCurrentState(false);

  return [isOn, turnOn, turnOff];
};
