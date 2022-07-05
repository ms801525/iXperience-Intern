// Profile class represents a model of a user profile

export class Profile{
    constructor({id,name,email}){
        this.id = id;
        this.name = name;
        this.email = email;
    }
    toJson() {
        return {
          name:this.name,
          email:this.email,
        }
      }
    
      static fromFirebase(docSnap) {
        const data = docSnap.data();
        return new Profile({
          id: docSnap.id,
          name: data.name,
          email: data.email,
        });
      }
}