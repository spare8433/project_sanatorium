import React, { useCallback } from 'react'

type UseCheckQueryType = <VT = any>(
  queryName: string,
  defaultValue: VT | any,
  limitValues?: any[],
) => VT

const useCheckQuery: UseCheckQueryType = (queryName, defaultValue, limitValues) => {
  let getParameter = useCallback(
    (key: string) => new URLSearchParams(window.location.search).get(key),
    [window.location.search],
  )
  let value = getParameter(queryName)

  if (!limitValues?.includes(value)) {
    return defaultValue
  }

  if (value === null) {
    value = defaultValue
  }
  return value
}

export default useCheckQuery
