// import React, { useState } from 'react'
// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
// import axios from 'axios'

// const CARD_OPTIONS = {
//     iconStyle: 'solid',
//     style : {
//         base : {
//             iconColor: '#c4f0ff',
//             color: 'white',
//             fontWeight: 500,
//             fontFamily: 'REFINMENT, Serif',
//             fontSize: '16px',
//             fontSmoothing: 'antialiased',
//             ':-webkit-autofill': { color: '#fce883'},
//             '::placeholder': { color: '#87bbfd'}
//         },
//         invalid: {
//             iconColor: '#ffc7ee',
//             color: '#ffc7ee'
//         }
//     }
// }

// export default function PaymentForm(props) {

//     const [success, setSuccess] = useState(false)
//     const stripe = useStripe()
//     const elements = useElements()

//     async function handleSubmit(e) {
//         e.preventDefault()
//         const {err, paymentMethod} = await stripe.createPaymentMethod({
//             type: 'card',
//             card: elements.getElement(CardElement)
//         })
    

//         if (!err){
//             try {
//                 const {id} = paymentMethod
//                 // change to www.bulukututea.com
//                 const response = await axios.post('http://localhost:4000/payment', {
//                     //amount needs to be changed to a prop
//                     amount: props.cost,
//                     id 
//                 })

//                 if(response.data.success){
//                     console.log('successful payment')
//                     setSuccess(true)
//                 }

//             } catch(error){
//                 console.log('Error', error)
//             }
//         } else {
//             console.log(err.message)
//         }
//     }   

    
//     return (
//       <>
//       {!success ?
//       <form onSubmit={handleSubmit}>
//         {/* stipe CSS */}
//         <fieldset className='FormGroup'>
//             <div className='FormRow'>
//                 <CardElement options={CARD_OPTIONS} />
//             </div>
//         </fieldset>
//         <button className='button'> Pay </button>
//       </form>
//       :
//       <div>
//         <h2>You just bought amazing tea!</h2>
//       </div>
//       }

//       </>
//     )
// }
