import {
    collection, addDoc,
    query, getDocs,
    doc, updateDoc,
    deleteDoc,
    where
} from 'firebase/firestore';
  
import { db } from '../firebase/Firebase';
import { Order } from '../models/order';
  
class OrdersService {
    constructor() {
        this.collection = 'Orders';
    }

    async fetchOrders(user) {
        if (user !== null){
            const collectionRef = collection(db, this.collection);
            const q = query(collectionRef, where('userid', '==', user.uid), where('in_cart', '==', true));
            const querySnapshot = await getDocs(q);

            const orders = [];

            querySnapshot.forEach((doc) => {
                orders.push(Order.fromFirebase(doc));
            });

            return orders
        }
        return  []
    }
}

const service = new OrdersService();

export default service;