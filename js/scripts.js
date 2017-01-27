var toppingDict = {
  "cheese":1, "pepperoni":1, "pineapple":1, "sausage":1, "Canadian bacon":1.5, "artichoke":1, "onions":1, "green onions":1, "anchovies":1, "bacon":1.5, "chicken":1
};
var classicPizzaDict = {
  "Classic Pepperoni":["cheese","pepperoni"],
  "Classic Cheese":["cheese"],
  "Classic Meatlovers":["cheese","pepperoni","sausage", "Canadian bacon", "chicken"],
  "Classic Vegetarian": ["cheese","artichoke","onions","green onions"],
  "Classic Hawaiian":["cheese", "Canadian bacon", "pineapple"]
};

function Pizza(name, size){
  this.name=name;
  this.toppings = [];
  this.size = size;
}

function topping(topper){
  this.name=topper
  this.price=toppingDict[topper];
  //add ammount: light, normal , extra
}

Pizza.prototype = {
  calculatePrice : function() {
    var totalPrice = 0;
    for(var i = 0; i <this.toppings.length; i++){
      totalPrice += this.toppings[i].price;
    }
    return totalPrice;
  },
  getToppings : function(){
    var toppingAmmount =classicPizzaDict[this.name].length;
    for(var i = 0; i < toppingAmmount; i++){
      var newTopping = new topping(classicPizzaDict[this.name][i])
      this.toppings.push(newTopping);
    }

  }
}


$(function(){
  $("form#order").submit(function(event){
    event.preventDefault();
    var size = $("input[name=pizzaSize]:checked").val();
    var pizzaName=$("input[name=classicPizza]:checked").val();

    var newPizza = new Pizza(pizzaName, size)
    newPizza.getToppings();
    console.log(newPizza);
    $("#priceOutput").text(newPizza.calculatePrice());
  })
})
