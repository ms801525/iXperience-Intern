export class Product{
    constructor({id,title,description,price,downloadUrl}){
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.downloadUrl = downloadUrl;
    }
    toJson() {
        return {
          title: this.title,
          description: this.description,
          price: this.price,
          downloadUrl: this.downloadUrl,
        }
      }
    
      static fromFirebase(doc) {
        const data = doc.data();
        return new Product({
          id: doc.id,
          title: data.title,
          description: data.description,
          price: data.price,
          downloadUrl: data.downloadUrl,
        });
      }
}