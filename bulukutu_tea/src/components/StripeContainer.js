import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from './PaymentForm'

const PUBLIC_KEY = 'pk_test_51LX5RqEcxjtS7UCvxCMf9c3V2MPzKrRFcQPU4cpcF3br8xy9gdOYjbfpAuHm03oVeVNONQmSTDRS38uRC4SqEyzG00q7keZYYI'

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer(props) {
  return (
    <Elements stripe={stripeTestPromise}>
        <PaymentForm cost={props.cost}/>
    </Elements>
  )
}
