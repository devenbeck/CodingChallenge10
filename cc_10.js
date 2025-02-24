//Task 1: Creating a Product Class
//Scenario: You are developing an inventory management system for an online
//store and need to create a product class to represent items in the inventory
class Product {
    constructor(name, id, price, stock) {    //class product created with properties
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    }
    getDetails() {     //returns formatted string of product details
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
    }; 
    updateStock(quantity){         //modifies stock level after an order is placed
        this.stock -= quantity;
    }
}
const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails()); 

prod1.updateStock(3);
console.log(prod1.getDetails()); 
