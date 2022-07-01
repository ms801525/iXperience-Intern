import React from 'react'
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/Firebase';
import Button from '../components/common/ButtonFooter';
import '../styles/CartPage.css'

export default function CartPage(props) {
    async function onLogoutClicked() {
        await signOut(auth);
      }
    
  return (
    <div className="card-body">
    {
        props.user ?
        <div onClick={onLogoutClicked} style={{width:"fit-content"}} >
            <Button page="/cart">
                Logout
            </Button>
            <p>{props.user.email}</p>
        </div>
        :
        <div className='m-4'>
            <Button size={"btn-xl"} page="/register">Register</Button>
            <Button size={"btn-xl"} page='/login'>Login</Button>
        </div>
      }
    </div>
  )
}
