import React, { useState } from 'react';
import Spinner from './Spinner';



export default function Button({
  variant = 'primary',
  onClick,
  className,
  type,
  bgcolor,
  loading = false,
  disabled = false,
  children
}) {

  // const navigate = useNavigate();
  const [isHovering, setHovering] = useState(false);

  // function navToPage() {
  //   navigate(page);
  // }

  function handleMouseEnter() {
    setHovering(true);
  }

  function handleMouseLeave() {
    setHovering(false);
  }

  return (
    <button
      className={'btn btn-' + variant + ' ' + className}
      onClick={onClick}
      type={type}
      style={{ backgroundColor: {bgcolor}, fontSize: "x-large", color: isHovering ? 'black' : '#779730'}}
      disabled={disabled || loading}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}

      {
        loading ?
          <div className='button-spinner'>
            <Spinner variant='light' />
          </div>
          :
          <></>
      }
    </button>
  )
}