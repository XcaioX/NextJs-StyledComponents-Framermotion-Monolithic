import { Dispatch, SetStateAction, useEffect, useState } from 'react'

type Response<T> = [T, Dispatch<SetStateAction<T>>]

export function usePersistedState<T>(key: string, initialState: T): Response<T> {
  const [state, setState] = useState(() => {
    if (typeof window !== undefined) {
      const storageValue = localStorage.getItem(key)

      if (storageValue) return JSON.parse(storageValue)
      else return initialState
    }
  })

  useEffect(() => {
    if (typeof window !== undefined) {
      localStorage.setItem(key, JSON.stringify(state))
    }
  }, [key, state])

  return [state, setState]
}
