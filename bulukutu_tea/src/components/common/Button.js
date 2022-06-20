import React from 'react'
import { Children } from 'react'

export default function Button({
    children,
    size,
    width,
}) {
  return (
    <button className={'btn btn-outline-dark m-1 ' + size + ' ' + width} 
      style={{backgroundColor : '#B2755E',
              fontSize : "large"}}>
        {children}
    </button>
  )
}
