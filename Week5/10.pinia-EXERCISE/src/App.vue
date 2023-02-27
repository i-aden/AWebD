<!-- 
  ====================================================
  Creating a Simple Shopping Cart and Price Calculator
  ====================================================
  Imagine a hypothetical corporate hardware site that lets employees select products they need shipping 
  to their office. 
  This cart is much simpler than a typical e-commerce site as it does not need to process credit cards or 
  even ask the person where they are (IT knows where you sit!). 
  It still needs to present you with a list of items, let you select how much you want, and then provide 
  you with a total price that will be billed to your department.

  You need to build a Pinia store that represents the available products and their prices. 
  You will need multiple components to handle the different aspects of the application and properly interact 
  with the store data.

  Steps:
  1. Build a store and define an array of products and a cart in the state. 
      Every product will have name and price properties.
  2. Define a component that lists out each product and price.
  3. Modify the component to have buttons to add or remove one of the products from your cart.
  4. Define a second component that shows the current cart (every product and quantity).
  5. Use a third component that displays the total cart price and has a button to complete the checkout. 
      The total price is the sum of each product in the cart multiplied by the quantity of the product. 
      The checkout button should simply alert the user that the checkout process is done but take no other steps.
  
  You should get the following output initially, showing an empty cart:

  Products
  Name    Price
                  _____________ ___________________
  Widgets    10   |Add to Cart| | Remove from Cart|
                  ------------- -------------------
                  _____________ ___________________
  Doodads    8    |Add to Cart| | Remove from Cart|
                  ------------- -------------------
                  _____________ ___________________
  Roundtuits 12   |Add to Cart| | Remove from Cart|
                  ------------- -------------------
                  _____________ ___________________
  Fluf       4    |Add to Cart| | Remove from Cart|
                  ------------- -------------------
                  _____________ ___________________
  Goobers 7       |Add to Cart| | Remove from Cart|
                  ------------- -------------------

Cart
Name        Quantity

Checkout
Your total is £0


As you add and remove items, you will see the cart and totals update in real time:

Products
  Name    Price
                  _____________ ___________________
  Widgets    10   |Add to Cart| | Remove from Cart|
                  ------------- -------------------
                  _____________ ___________________
  Doodads    8    |Add to Cart| | Remove from Cart|
                  ------------- -------------------
                  _____________ ___________________
  Roundtuits 12   |Add to Cart| | Remove from Cart|
                  ------------- -------------------
                  _____________ ___________________
  Fluf       4    |Add to Cart| | Remove from Cart|
                  ------------- -------------------
                  _____________ ___________________
  Goobers 7       |Add to Cart| | Remove from Cart|
                  ------------- -------------------

Cart
Name        Quantity
Goobers     2
Fluff       1
Roundtuits  3
Widgets     4


Checkout            ____________
Your total is £94.  | Checkout |
                    ------------     

As products are added, the cart display updates to show quantity values and the total in the Checkout section
accurately reflects the total price.                    
 -->

<script setup>
</script>

<template>
  <div>
  </div>
</template>

<style>
</style>