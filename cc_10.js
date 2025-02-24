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

//Task 2: Creating an Order Class
//Scenario: Customers place orders for products, and the inventory system needs to track them.
class Order {
    constructor(orderId, product, quantity) {   //order class created with properties
        this.orderId =orderId; 
        this.product =product; 
        this.quantity =quantity; 
        this.totalPrice =product.price * quantity; 
        this.product.updateStock(quantity);   // Reduce stock after quantity ordered
    }
    getOrderDetails() {       //returns order details
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.totalPrice}`
    }; 
}
const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails());  //prints result
console.log(prod1.getDetails()); 

//Task 3: Creating an Inventory Class
//Scenario: The store needs to keep track of multiple products
class Inventory {       //inventory class including property products (array of product instances)
    constructor() {
        this.products = []; // Array of products in Inventory
        this.orders= []; // Array of Orders Placed
    }
    addProduct(product) {
        this.products.push(product); // Adds new product to inventory
    }
    listProducts(){   //logs all products details
        this.products.forEach(product =>{
            console.log(product.getDetails());
        });
    }
}
const inventory = new Inventory();   // test cases
inventory.addProduct(prod1);
inventory.listProducts();

//Task 4: Implementing Order Management 
//Scenario: The system should allow multiple orders to be placed and track them
Inventory.prototype.placeOrder = function(orderId, product, quantity) {  //extends existing inventory class from task 3 
    if (product.stock >= quantity) {
        const newOrder = new Order(orderId, product, quantity); // Create new order
        this.orders.push(newOrder); // Adding new Order to order array
    
    }
}
Inventory.prototype.listOrders = function() {  //logs all placed orders
    this.orders.forEach(order => {
        console.log(order.getOrderDetails());
    });
}
inventory.placeOrder(601, prod1, 2);
inventory.listOrders();
console.log(prod1.getDetails());