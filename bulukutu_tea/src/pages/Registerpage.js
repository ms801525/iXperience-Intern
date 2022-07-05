import React from 'react'
import { useState } from 'react'

// firebase imports
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../firebase/Firebase';
import { useNavigate } from 'react-router-dom';
import ProfileService from '../products/services/profile.service'
import { Profile } from '../products/models/profile';
 


// renders register page and handles register auth
export default function Registerpage() {
   
  const navigate=useNavigate();
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [name,setName]=useState('')

  

  // creates user on submit with err handling
  async function onFormSubmit(e){
    e.preventDefault();
   try{
   const userCred = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    ProfileService.saveProfile(new Profile({
      id: userCred.user.uid,
      name: name,
      email:email,
    }))
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
            <label className="form-label">Name</label>
             <input onChange={(e)=>setName(e.target.value)}
             vaule={name}
             type="text" className="form-control"/>
        </div>
        <div className="mb-3">
            <label className="form-label">Email address</label>
             <input onChange={(e)=>setEmail(e.target.value)}
             vaule={email}
             type="email" className="form-control"/>
        </div>
        <div className="mb-3">
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
