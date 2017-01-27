#Papa Don's Pizzeria
###Authored by Dylan Stackhouse, 1-27-17
##Description:
A website for Papa Don's Pizzeria from which you may order classic pizzas like pepperoni, Hawaiian, and vegetarian, or you can customize your own pizza to your taste by selecting anything from the wide range of ingredients.

##Setup:
The two simple ways to access this site and order your own pizza are as follows.
1. Download or clone this project's git repository from [github](https://github.com/DylanCStack/pizza-objects.git "But how did you get this far without that?") and open index.html in any web browser(Chrome recommended).
2. Visit the site's [gh-pages address](DylanCStack.gihub.io/pizza-objects).

##Specifications
1. User will be able to select a pizza with predetermined toppings, and a pizza size.
    * **Input: click: classic pepperoni, large**
    * **Output: pepperoni, large options highlighted**
2. User may submit their order and be returned a calculated price based on size and ingredients.
  * **Input: click: classic pepperoni, large. Submit**
  * **Output: pepperoni, large options highlighted. Price:$16.00**
3. User will be able to select a custom pizza and add an arbitrary number of toppings.
  * **Input: click:custom, cheese, pepperoni, onions**
  * **Output:custom pizza window opens. Cheese, pepperoni, and onion options highlighted**
4. Custom pizzas will have their price properly calculated upon submission.
  * **Input: click:custom, cheese, pepperoni, onions. Submit**
  * **Output:custom pizza window opens. Cheese, pepperoni, and onion options highlighted. Price: $17.50**
5. User may select an arbitrary number of pizzas to order, all of which will have their price calculated.
  * **Input: click:custom, cheese, Canadian bacon, pineapple, onions. Click:add. click:classic pepperoni. Submit**
  * **Output:Price: $35.00**
6. After submission, a receipt will be presented to the user showing what their purchase and how the price adds up.
  * **Input: click:custom, cheese, Canadian bacon, pineapple, onions. Click:add. click: classic pepperoni. Submit**
  * **Output: Your order:
    * 1 classic pepperoni:
      *Large: $14.00
      *Cheese: $1.00
      *Pepperoni: $1.00
    * Price:$16.00.
    * 1 custom pizza.
      *Large: $14.00
      *Cheese: $1.00
      *Canadian bacon: $1.50
      *Pineapple: $1.00
      *Onions: $1.00
    * Price: $18.50
  *Total Price: $35.00**
