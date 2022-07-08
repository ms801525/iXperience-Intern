import{
    ref,
    uploadBytesResumable,
    getDownloadURL
} from "firebase/storage"

import { storage } from "../../firebase/Firebase"

// handles images in firebase
class ImageService{
    uploadImage(file, onUploadProgress){
        return new Promise((resolve,reject)=>{
            const storageRef = ref(storage, `product-images/ ${this.getUniqueFileName(file)}` );
            const uploadImage = uploadBytesResumable(storageRef, file)

            uploadImage.on('state_changed',
            (snapshot)=>{
                this.handleProgressUpdate(snapshot,onUploadProgress);
            },
            (error)=>{
                reject(this.handleError(error));
            },
            ()=> {
                getDownloadURL(uploadImage.snapshot.ref).then((downloadUrl) => {
                    resolve(downloadUrl);
            })
        },
        );
    })
    
}
        //creates a unique id for each image uploaded
    getUniqueFileName(file) {
        const dotIndex = file.name.lastIndexOf('.');
        const fileName = file.name.substring(0, dotIndex);
        const fileExtension = file.name.substring(dotIndex);
        const timestamp = (new Date()).getTime();
        return fileName + '-' + timestamp + fileExtension;
        }

    handleProgressUpdate(snapshot, onProgressUpdate) {
        if (onProgressUpdate) {
        const progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
        onProgressUpdate(progress);
        }
    }
}

const service = new ImageService();
export default service;
