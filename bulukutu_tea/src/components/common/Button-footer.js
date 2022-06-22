import React from 'react'

export default function Bfooter({
    children,
    size,
    width,
}) {
  return (
    <button className={'btn btn-secondary-light m-1 ' + size + ' ' + width} 
      style={{backgroundColor : '#000000',
              fontSize : "large",
              color : '#FFFFFF',}}>
        {children}
    </button>
  )
}
