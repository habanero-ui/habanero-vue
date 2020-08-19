import React from 'react'

import copyToClipboard from './copyToClipboard'

export default function useCopyToClipboard() {
  const timeout = React.useRef(null)

  const [isCopying, setIsCopying] = React.useState(false)

  const copy = React.useCallback((str) => {
    copyToClipboard(str)
    setIsCopying(true)
    if (timeout.current) {
      clearTimeout(timeout.current)
    }
    timeout.current = setTimeout(() => {
      setIsCopying(false)
    }, 2000)
  }, [])

  return [isCopying, copy]
}
