import React from 'react'
import { useState } from 'react'
import { db } from '../firebase/Firebase';
import { collection,addDoc} from "firebase/firestore"; 

export default function ContactUsPage() {
  
  
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [message,setMessage]=useState('')
    

    async function onFormSubmit(e){
        e.preventDefault();
       
       try{
        const docRef = await addDoc(collection(db, "support"), {

            name: name,
            email: email,
            message: message,
          
          });
          alert("Thank you, we have received your message")

       }
       catch{
           
       }
      
        

    }
  
  
  
    return (

 <div>


     <div className='card card-body'>
        <h1 className='text-center'>Contact Us !</h1>

        <p className='text-center'>We will be more than happy to assit you !</p>

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
            <label className="form-label ">Message</label>
             <input onChange={(e)=>setMessage(e.target.value)}
             vaule={message}
             type="text" className="form-control py-4"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
     </div>

     <div className='card'>
         <h1 className='text-center'>FAQs</h1>
         <div className="accordion" id="accordionExample">
             <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
    </div>
 </div>
    
     
     
  )
}
