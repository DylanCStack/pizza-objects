var toppingDict = {
  "cheese":1, "pepperoni":1, "pineapple":1, "sausage":1, "Canadian bacon":1.5, "artichoke":1, "onions":1, "green onions":1, "anchovies":1, "bacon":1.5, "chicken":1, "tomatoes":1, "sun-dried":1
};

var sizeDict = {
  "small":12,
  "medium":16,
  "large":18,
  "extra large":22
};
function clearPizza(){
  $("input[type=checkbox]:checked").each(function(){
    $(this).prop('checked', false);

  })
}
function addPizza(pizza){
  pizzaPrice = pizza.calculatePrice()
  return pizzaPrice
}

function Pizza(size){
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

}

var orderPrice = 0;//maybe change to not be global variable
$(function(){
  $("div.btn").click(function(){
    var thisID = $(this).attr("id")
    clearPizza();
  })

  $("form#order").submit(function(event){
    event.preventDefault();
    clearPizza();

    var pizzaPrice = 0;
    var size;
    // var pizzaToppings = [];
    $(".pizza").each(function(){
      size = $(this).children("label").children("input[type=radio]:checked").val();
      var newPizza = new Pizza(size)
      pizzaPrice = addPizza(newPizza);
      console.log("should be size:  " + size)

      $(this).children("label").children("input[type=checkbox]:checked").each(function(){
        var topper = $(this).val();

        var newTopping = new topping(topper);
        newPizza.toppings.push(newTopping);
        // pizzaToppings.push(newTopping.name);
      })

      orderPrice += pizzaPrice;
    })

    $("#totalOrder").prepend('<p>One '+size+' pizza</p>' + /*'<p>With '+pizzaToppings+'</p>'+*/'<p>Price ' +pizzaPrice+'</p>')
    $("#priceOutput").text("$"+orderPrice);
  })
})
