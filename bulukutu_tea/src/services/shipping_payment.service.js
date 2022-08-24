import {
  collection,
  query,
  getDocs,
  doc,
  getDoc,
  addDoc,
} from "firebase/firestore";

import { db } from "../firebase/Firebase";
import { Shipping_Payment } from "../models/shipping_payment";

//handles shipping and payment details in firebase
class ShippingPaymentService{
    constructor(){
        this.collection = 'Shipping_Payment'
    }

    async createShippingPaymentDetails(shippingPaymentDetails) {
        const collectionRef = collection(db, this.collection);
    
        const docRef = await addDoc(collectionRef, shippingPaymentDetails.toJson());
    
        shippingPaymentDetails.id = docRef.id;
        return shippingPaymentDetails;
      }

      //get shipping and payment details by id
      async fetchMyProduct(shippingPaymentId) {
        const docRef = doc(db, 'Shipping_Payment', shippingPaymentId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          // create shipping and payment document from doc snap
          return Shipping_Payment.fromFirebase(docSnap);
        } else {
          // return an new payment and shipping document with the shippingPaymentId
          return new Shipping_Payment({ id: shippingPaymentId });
        }
      }


    async fectchShippingPaymentDetails(){
    const collectionRef = collection(db, this.collection);

    const querySnapshot = await getDocs(query(collectionRef));
    const shippingPaymentDetails = [];

    querySnapshot.forEach(doc => {
      shippingPaymentDetails.push(Shipping_Payment.fromFirebase(doc));
    });

    return shippingPaymentDetails;
    }
}

const service = new ShippingPaymentService();

export default service;