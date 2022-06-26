import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='container p-5'>
        <div className='container text-center m-5'>
            <div>Error 404 Page Not Found</div>
            <div><Link to="/">Go back home</Link></div>
        </div>
    </div>
    
  )
}
