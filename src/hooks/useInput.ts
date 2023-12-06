import { useState } from 'react'

type UseInputType = <VT = any, ET = any>(
  inputValue: VT,
) => [VT, (e: React.ChangeEvent<ET>) => void, React.Dispatch<React.SetStateAction<VT>>]

const useInput: UseInputType = (inputValue) => {
  const [value, setValue] = useState(inputValue)

  const onChange = (e: React.ChangeEvent<any>) => {
    setValue(e.currentTarget.value)
  }

  return [value, onChange, setValue]
}

export default useInput
