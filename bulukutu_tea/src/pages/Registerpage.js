import React from 'react'
import { useState } from 'react'
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../firebase/Firebase';
import { useNavigate } from 'react-router-dom';

// renders register page and handles register auth
export default function Registerpage() {
   
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate();

  async function onFormSubmit(e){
    e.preventDefault();
   try{
   const userCred = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    navigate('/shop')

   }
   catch(err){
     alert(err.message);
   }

  }

  
    return (
    <div className='card card-body'>
        <h1 className='text-center'>Register !</h1>

        <p className='text-center'>Register with your email and password</p>

        <form onSubmit={onFormSubmit}>
        <div className="mb-3">
            <label className="form-label">Email address</label>
             <input onChange={(e)=>setEmail(e.target.value)}
             vaule={email}
             type="email" className="form-control"/>
        </div>
        <div class="mb-3">
            <label className="form-label">Password</label>
            <input onChange={(e)=>setPassword(e.target.value)}
             vaule={password} 
             type="password" className="form-control"/>
        </div>

        <div className='text-center'>
            <button className='btn btn-primary px-5'>
                Register
            </button>
        </div>
        </form>
    </div>
  )
}
