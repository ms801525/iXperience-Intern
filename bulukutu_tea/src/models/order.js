export class Order {
    constructor(orderid, name, price, quantity, in_cart, userid) {
        this.orderid = orderid;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.in_cart = in_cart;
        this.userid = userid;
    }

    toJson() {
        return {
            orderid: this.orderid,
            name : this.name,
            price : this.price,
            quantity : this.quantity,
            in_cart : this.in_cart,
            userid : this.userid,
        }
    }
    
    static fromFirebase(docSnap) {
        const data = docSnap.data();
        return new Order(
            docSnap.id,
            data.name,
            data.price,
            data.quantity,
            data.in_cart,
            data.userid,
        );
    }

}