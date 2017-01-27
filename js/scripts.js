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
function addPizza(id){
  var cheese, pepperoni, hawaiian, veggie, meat;
  switch (id) {
    case "addCheese":
      cheese="checked"
      break;
    case "addHawaiian":
      cheese="checked"
      hawaiian="checked"
      break;
    case "addPepperoni":
      cheese="checked"
      pepperoni="checked"
      break;
    case "addVegetarian":
      cheese="checked"
      veggie="checked"
      break;
    case "addMeatlovers":
      cheese="checked"
      meat="checked"
      break;

    default:
      break;

  }
  $("#pizzas").append(
        '<div>'+
          '<label for="size">'+
            '<input type="radio" name="pizzaSize" value="small">'+
            'Small'+
          '</label>'+
          '<label for="size">'+
            '<input type="radio" name="pizzaSize" value="medium">'+
            'Medium'+
          '</label>'+
          '<label for="size">'+
            '<input type="radio" name="pizzaSize" value="large">'+
            'Large'+
          '</label>'+
          '<label for="size">'+
            '<input type="radio" name="pizzaSize" value="extra large">'+
            'Extra Large'+
          '</label>'+
          '</label>'+
          '<label for="topping">'+
            '<input type="checkbox" name="topping"'+ 'value="cheese" '+ cheese + '>'+
              'Cheese'+
          '</label>'+
          '<label for="topping">'+
            '<input type="checkbox" name="topping"'+ 'value="pepperoni" '+ pepperoni +'>'+
              'Pepperoni'+
          '</label>'+
          '<label for="topping">'+
            '<input type="checkbox" name="topping"'+ 'value="cheese" '+ hawaiian +'>'+
              'Canadian Bacon'+
          '</label>'+
          '<label for="topping">'+
            '<input type="checkbox" name="topping"'+ 'value="pineapple" '+ hawaiian +'>'+
              'Pineapple'+
          '</label>'+
          '<label for="topping">'+
            '<input type="checkbox" name="topping"'+ 'value="sausage" '+ meat +'>'+
              'Sausage'+
          '</label>'+
          '<label for="topping">'+
            '<input type="checkbox" name="topping"'+ 'value="chicken" '+ meat +'>'+
              'Chicken'+
          '</label>'+
          '<label for="topping">'+
            '<input type="checkbox" name="topping"'+ 'value="bacon" '+ meat +'>'+
              'bacon'+
          '</label>'+
          '<label for="topping">'+
            '<input type="checkbox" name="topping"'+ 'value="artichoke" '+ veggie +'>'+
              'Artichoke'+
          '</label>'+
          '<label for="topping">'+
            '<input type="checkbox" name="topping"'+ 'value="onions" '+ veggie +'>'+
              'Onions'+
          '</label>'+
          '<label for="topping">'+
            '<input type="checkbox" name="topping"'+ 'value="green onions" '+ veggie +'>'+
              'Green Onions'+
          '</label>'+
          '<label for="topping">'+
            '<input type="checkbox" name="topping"'+ 'value="tomatoes" '+ veggie +'>'+
              'Tomatoes'+
          '</label>'+
          '<label for="topping">'+
            '<input type="checkbox" name="topping"'+ 'value="sun-dried" '+ veggie +'>'+
              'Sun-Dried Tomatoes'+
          '</label>'+
          '<label for="topping">'+
            '<input type="checkbox" name="topping"'+ 'value="anchovies" >'+
              'Anchovies'+
          '</label>'+

        '</div>');
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
  $(".btn").click(function(){
    var thisID = $(this).attr("id")
    addPizza(thisID)
  })

  $("form#order").submit(function(event){
    event.preventDefault();
    var orderPrice = 0
    $("#pizzas").each(function(){
      var size = $(this).children("div").children("label").children("input[type=radio]:checked").val();
      var newPizza = new Pizza(size)

      $(this).children("div").children("label").children("input[type=checkbox]:checked").each(function(){
        // var ingredient = $(this).val();
        var topper = $(this).val();
        var newTopping = new topping(topper);
        newPizza.toppings.push(newTopping);
      })
      console.log(newPizza);
      orderPrice +=newPizza.calculatePrice();
    })

    //var pizzaName=$("input[name=pizza]:checked").val();


    // newPizza.getToppings();

    $("#priceOutput").text("$"+orderPrice);
  })
})
