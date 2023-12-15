import React, { useState } from 'react'

type UseObjectStateType = <OT = any>(
  obj: OT,
) => [OT, React.Dispatch<React.SetStateAction<OT>>, (key: string, value: any) => void]

const useObjectState: UseObjectStateType = (obj) => {
  const [state, setState] = useState(obj)

  const updateObject = (key: string, value: any) => {
    setState((prev) => {
      return { ...prev, [key]: value }
    })
  }

  return [state, setState, updateObject]
}

export default useObjectState
