'use client'

import { useSyncExternalStore } from 'react'

// 12-hour with AM/PM: most visitors read it faster than 24-hour, and "9:40 PM" says "late here" at a glance.
const formatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Africa/Lagos',
  hour: 'numeric',
  minute: '2-digit',
  hour12: true,
})

const subscribe = (onChange: () => void) => {
  const id = setInterval(onChange, 15_000)
  return () => clearInterval(id)
}

const getTime = () => formatter.format(new Date())

// Rendered on the client only: the server's clock would never match the visitor's first paint.
const LagosClock = () => {
  const time = useSyncExternalStore(subscribe, getTime, () => '')

  return (
    <span className="tabular-nums">
      Lagos{time && <> · {time}</>}
    </span>
  )
}

export default LagosClock
