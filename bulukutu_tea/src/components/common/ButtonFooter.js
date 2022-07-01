import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Button({ children, size, width, page }) {
    const navigate = useNavigate();
  
    function navToPage() {
      navigate(page);
    }
  return (
    <button className={'btn btn-secondary-light m-1 ' + size + ' ' + width} 
      style={{backgroundColor : '#252525',
              fontSize : "large",
              color : '#FFFFFF',}}
              onClick={navToPage}>
        {children}
        
    </button>
  )
}
