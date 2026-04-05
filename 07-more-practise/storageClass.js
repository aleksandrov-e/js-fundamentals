class Storage {
    constructor(capacity) {
       this.capacity = capacity;
       this.storage = [];
       this.totalCost = 0;
    }

    addProduct(product) {
       this.storage.push(product);
       this.capacity -= product.quantity;
       this.totalCost += product.price * product.quantity;
    }

    getProducts() {
       return this.storage
         .map(p => JSON.stringify(p))
         .join("\n");
    }
}

let storage = new Storage(50);

storage.addProduct({ name: "apple", price: 2, quantity: 5 });

console.log(storage.getProducts());