var toppingDict = {
  "cheese":1, "pepperoni":1, "pineapple":1, "sausage":1, "Canadian bacon":1.5, "artichoke":1, "onions":1, "green onions":1, "anchovies":1, "bacon":1.5, "chicken":1, "tomatoes":1, "sun-dried":1
};
var classicPizzaDict = {
  "Classic Pepperoni":["cheese","pepperoni"],
  "Classic Cheese":["cheese"],
  "Classic Meatlovers":["cheese","pepperoni","sausage", "Canadian bacon", "chicken"],
  "Classic Vegetarian": ["cheese","artichoke","onions","green onions"],
  "Classic Hawaiian":["cheese", "Canadian bacon", "pineapple"]
};
var sizeDict = {
  "small":12,
  "medium":16,
  "large":18,
  "extra large":22
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
    var totalPrice = sizeDict[this.size];
    for(var i = 0; i <this.toppings.length; i++){
      totalPrice += this.toppings[i].price;
    }
    return totalPrice;
  },
  getToppings : function(){
    if(!classicPizzaDict[this.name]){
      var toppingAmmount =classicPizzaDict[this.name];//.length;
      for(var i = 0; i < toppingAmmount.length; i++){
        var newTopping = new topping(classicPizzaDict[this.name][i])
        this.toppings.push(newTopping);
      }
    }
  }//,
}


$(function(){
  $("label:last-of-type").children("input").click(function(){
    $(".customOptions").show();
  })

  $("form#order").submit(function(event){
    event.preventDefault();
    var size = $("input[name=pizzaSize]:checked").val();
    var pizzaName=$("input[name=pizza]:checked").val();

    var newPizza = new Pizza(pizzaName, size)
    // newPizza.getToppings();
    $("input[type=checkbox]:checked").each(function(){
      // var ingredient = $(this).val();
      var topper = $(this).val();
      var newTopping = new topping(topper);
      newPizza.toppings.push(newTopping);
    })
    console.log(newPizza);
    $("#priceOutput").text(newPizza.calculatePrice());
  })
})
