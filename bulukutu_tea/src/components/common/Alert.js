import React from 'react'

export default function Alert({
  variant = 'danger',
  className = '',
  children,
}) {
  return (
    <div className={"alert alert-" + variant + ' ' + className} role="alert">
      { children }
    </div>
  )
}
