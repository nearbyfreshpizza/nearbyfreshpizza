const oGH = document.querySelector('#orderGoesHere');
window.onclick = function(event) {
  if(event.target == oGH) {
    oGH.style.display = "none";
  }
}

window.addEventListener('DOMContentLoaded', function(event) {
  localstore()
  cart()
});

let orderPizza = async function () {
  let order = await $$('#order');
}

function cart(button, type) {
  let itms = 0,
  amt = 0;
  if (button) {
    itms ++;
    amt += type['Price'];
    names += type['Name'];
  }
}



let restaurant = new Object();
restaurant['Options'] = ['Order', 'Pizza', 'Pasta', 'Starters', 'Drinks', 'Delivery'];
restaurant['Options'].map(o=>{
  restaurant[o] = new Object();
  // console.log(restaurant[o]);
});

restaurant.Order['Pizzas']; //  = orderPizza();
restaurant.Order['Customer']; //  = profile();
restaurant.Order['Total']; //  = totalPrice();

restaurant.Pizza['Names'] = ['Margherita', 'Formaggio', 'Chicken', "Pineapple'o'clock", 'Meat Town'];
restaurant.Pizza['Sizes'] = ['Personal', 'Small', 'Medium', 'Large', 'Extra Large']
restaurant.Pizza['Prices'] = [10, 14, 18, 25, 30];

restaurant.Pasta['Names'] = ['Lasagna', 'Ravioli', 'Spaghetti Classica'];
restaurant.Pasta['Prices'] = [10]

restaurant.Starters['Names'] = ["Today's Salad", 'Bruschetta', 'Garlic Bread'];
restaurant.Starters['Prices'] = [6.5, 8, 10]

restaurant.Drinks['Names'] = ['Coke', '7 Up', 'Beer', 'Wine'];
restaurant.Drinks['Sizes'] = ['20 Ounce', '2 Liter'];
restaurant.Drinks['Prices'] = [2.75, 3.25]

restaurant.Delivery['fee'] = 3.50;
restaurant.Delivery['tip'];

function logs(event) {
  console.log(`Restaurant: ${JSON.stringify(restaurant)}`);
}

const reducer = (previousValue, currentValue) => previousValue + currentValue;
function calculatePrice(items) {
  restaurant[items].Price.reduce(reducer)
}

function localstore() {
  localStorage.setItem('Restaurant', JSON.stringify(restaurant))
}

let $$ = async function(param) {
  return document.querySelector(param);
}

async function buttons() {
  let marker = await document.querySelectorAll('h1 > b');
  for await (let value of marker.values()) { console.log(value) }
}
