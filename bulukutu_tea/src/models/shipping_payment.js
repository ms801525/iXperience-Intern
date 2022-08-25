//Shipping payment class represents a model of a customers shipping
//address and payment details

export class Shipping_Payment {
  constructor({
    name,
    surname,
    email,
    phoneNumber,
    address,
    address2,
    city,
    // nameOnCard,
    // creditCardNumber,
    // expiration,
    // cvv,
  }) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.address2 = address2;
    this.city = city;
    // this.nameOnCard = nameOnCard;
    // this.creditCardNumber = creditCardNumber;
    // this.expiration = expiration;
    // this.cvv = cvv;
  }
  toJson() {
    return {
      name: this.name,
      surname: this.surname,
      email: this.email,
      phoneNumber: this.phoneNumber,
      address: this.address,
      address2: this.address2,
      city: this.city,
      // nameOnCard: this.nameOnCard,
      // creditCardNumber: this.creditCardNumber,
      // expiration: this.expiration,
      // cvv: this.cvv,
    };
  }

  static fromFirebase(docSnap) {
    const data = docSnap.data();
    return new Shipping_Payment({
      id: docSnap.id,
      name: data.name,
      surname: data.surname,
      email: data.email,
      phoneNumber: data.phoneNumber,
      address: data.address,
      address2: data.address2,
      city: data.city,
      // nameOnCard: data.nameOnCard,
      // creditCardNumber: data.creditCardNumber,
      // expiration: data.expiration,
      // cvv: data.cvv,
    });
  }
}
