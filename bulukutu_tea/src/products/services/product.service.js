import {
    collection,
    query,
    getDocs,
    doc,getDoc,
    addDoc,
  } from 'firebase/firestore';

import { db } from '../../firebase/Firebase';
import { Product } from '../models/products';

// handles products in firebase 

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

      //get product by id
      async fetchMyProduct(productId) {
        const docRef = doc(db, 'Products', productId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          // create product from doc snap
          return Product.fromFirebase(docSnap);
        } else {
          // return an new product with the productId
          return new Product({ id: productId });
        }
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