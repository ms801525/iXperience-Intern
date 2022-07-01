// Product class represents a model of a bulukutu tea product
export class Product{
    constructor({id,title,description,price,downloadUrls}){
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.downloadUrls = downloadUrls;
    }
    toJson() {
        return {
          title: this.title,
          description: this.description,
          price: this.price,
          downloadUrls: this.downloadUrls,
        }
      }
    
      static fromFirebase(docSnap) {
        const data = docSnap.data();
        return new Product({
          id: docSnap.id,
          title: data.title,
          description: data.description,
          price: data.price,
          downloadUrls: data.downloadUrls,
        });
      }
}