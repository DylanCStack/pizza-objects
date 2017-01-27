var toppingRepo = {
  "cheese":1, "pepperoni":1, "pineapple":1, "sausage":1, "Canadian Bacon":1.5, "artichoke":1, "onions":1, "green onions":1, "anchovies":1, "bacon":1.5, "chicken":1
}

function Pizza(name, toppings, size){
  this.name=name;
  this.toppings = [];
  this.size = size;
}

function topping(topper){
  this.name=topper
  this.price=toppingRepo[topper];
}

Pizza.prototype = {
  calculatePrice : function() {
    var totalPrice = 0;
    for(var i = 0; i <this.toppings.length; i++){
      totalPrice += this.toppings[i].price;
    }
  }//
}
