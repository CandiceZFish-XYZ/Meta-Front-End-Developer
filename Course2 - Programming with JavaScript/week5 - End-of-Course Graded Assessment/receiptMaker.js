// given data
const dishData = [
  {
    name: "Italian pasta",
    price: 9.55,
  },
  {
    name: "Rice with veggies",
    price: 8.65,
  },
  {
    name: "Chicken with potatoes",
    price: 15.55,
  },
  {
    name: "Vegetarian Pizza",
    price: 6.45,
  },
];
const tax = 1.2;

function getPrices(taxBoolean) {
  for (let dish of dishData) {
    let finalPrice;
    if (taxBoolean === true) {
      finalPrice = dish.price * tax;
    } else if (taxBoolean === false) {
      finalPrice = dish.price;
    } else {
      console.log("You need to pass a boolean to the getPrices call!");
      break;
    }

    console.log("Dish: " + dish.name + " Price: $" + finalPrice);
  }
}

//Call getPrices()
// getPrices(true);
// getPrices(false);
// getPrices();

function getDiscount(taxBoolean, guests) {
  getPrices(taxBoolean);

  if (typeof guests === "number" && guests > 0 && guests < 30) {
    let discount = 0;
    if (guests < 5) {
      discount = 5;
    } else {
      discount = 10;
    }

    console.log("Discount is: $" + discount);
  } else {
    console.log("The second argument must be a number between 0 and 30");
  }
}

// getDiscount(false, 2);
// getDiscount(false, 10);

// getDiscount(); // non-tax price & error msg for discount.
// getDiscount(true, "b"); // tax price & error msg  for discount.
