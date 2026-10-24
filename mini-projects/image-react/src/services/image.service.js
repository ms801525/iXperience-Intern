import {
  collection,
  query,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from 'firebase/firestore';

import { db } from '../firebase/firebase';
import { Image } from '../models/image';

class ImageService {

  constructor() {
    this.collection = 'images';
  }

  async fetchImages() {
    const collectionRef = collection(db, this.collection);
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const images = [];

    querySnapshot.forEach((docSnap) => {
      images.push(Image.fromFirebase(docSnap));
    });

    return images;
  }

  async createImage(image) {
    const collectionRef = collection(db, this.collection);

    const docRef = await addDoc(collectionRef, image.toJson());

    image.id = docRef.id;
    return image;
  }

  async deleteImage(imageId) {
    const docRef = doc(db, this.collection, imageId);
    await deleteDoc(docRef);
  }
}

const service = new ImageService();
export default service;