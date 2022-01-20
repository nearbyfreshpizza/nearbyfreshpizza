window.addEventListener('DOMContentLoaded', function(event) {
  // loaded(event);
  // logs(event);
  // names();
  buttons();
});

function buttons() {
  let marker = document.querySelectorAll('h1 > b');
  for(var value of marker.values()) {
    console.log(value);
  }
}

function loaded(event) { console.log("Event: " + event); }

let restaurant = new Object();

restaurant['Options'] = ['Pizza', 'Pasta', 'Starters', 'Drinks', 'Delivery'];
restaurant['Options'].map(o=>restaurant[o] = new Object());

restaurant.Pizza['Names'] = ['Margherita', 'Formaggio', 'Chicken', "Pineapple'o'clock", 'Meat Town'];
restaurant.Pizza['Sizes'] = ['Personal', 'Small', 'Medium', 'Large', 'Extra Large']
restaurant.Pizza['Radii'] = [8, 10, 12, 14, 16]
restaurant.Pizza['Areas'] = restaurant['Pizza']['Radii'].map(r=>parseFloat((3.1415926*r**2).toPrecision(4)));
restaurant.Pizza['Prices'] = [10, 14, 18, 25, 30]
restaurant.Pizza['Taxes'] = taxes('Pizza');

restaurant.Pasta['Names'] = ['Lasagna', 'Ravioli', 'Spaghetti Classica'];
restaurant.Pasta['Prices'] = [10]
restaurant.Pasta['Taxes'] = taxes('Pasta');

restaurant.Starters['Names'] = ["Today's Salad", 'Bruschetta', 'Garlic Bread'];
restaurant.Starters['Prices'] = [6.5, 8, 10]
restaurant.Starters['Taxes'] = taxes('Starters');

restaurant.Drinks['Names'] = ['Coke', '7 Up', 'Beer', 'Wine', 'Orange Juice'];
restaurant.Drinks['Sizes'] = ['12 Ounce', '2 Litre'];
restaurant.Drinks['Prices'] = [10, 14]
restaurant.Drinks['Taxes'] = taxes('Drinks');

restaurant.Delivery['fee'] = 2.50;
restaurant.Delivery['tip'];

function logs(event) {
  console.log(`Restaurant: ${JSON.stringify(restaurant)}`);
  console.log(restaurant.Pizza['Taxes'])
}

function totalPrice() { let order = new Object(); }
function choose() { let prices; }
function names() {
  restaurant.Pizza['Names'].map(name=>[b] = document.createElement('b'));
  console.log([b]);
}
function taxes(opt) {
  restaurant[opt]['Taxes'] = restaurant[opt]['Prices'].map(p=>parseFloat((p*.0725).toPrecision(4)));
  return restaurant[opt]['Taxes']
}
