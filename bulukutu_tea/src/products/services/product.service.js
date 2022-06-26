import {
    collection,
    query,
    getDocs,
    addDoc,
  } from 'firebase/firestore';

import { db } from '../../firebase/Firebase';
import { Product } from '../models/products';

class ProductsService{
    constructor(){
        this.collection = 'Products'
    }

    async createProduct(product) {
        const collectionRef = collection(db, this.collection);
    
        const docRef = await addDoc(collectionRef, product.toJson());
    
        product.id = docRef.id;
        return product;
      }

    async fetchProducts(){
    const collectionRef = collection(db, this.collection);

    const querySnapshot = await getDocs(query(collectionRef));
    const products = [];

    querySnapshot.forEach(doc => {
      products.push(Product.fromFirebase(doc));
    });

    return products;
    }
}

const service = new ProductsService();
export default service