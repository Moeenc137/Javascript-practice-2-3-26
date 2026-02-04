const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  open: {
    timing: {
      openaning: 90,
      closing: 223,
    },
  },

  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};

//Rest element:
//like spread element used to unpack the array items , the rest element is used to pack the array
//elements and give the rest elements that are left in array.

//Spread is used on right side:
arr1 = [1, 3, 4];
arr2 = [5, 6, 7];

arr = [1, 3, 4, ...arr2];
console.log(arr);

//rest is used on left side:
const [a, b, c, ...others] = [1, 2, 3, 4, 4, 3];
console.log(a, b, c, others);

//rest should be the last element , because it merges all the elements used after the last variable.
const [n, m, ...other] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(n, m, other);

//rest used on objects:
const { sat, ...weakdays } = { ...restaurant.openingHours, ...open };
console.log(weakdays);

//rest used in functions:
add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(1, 4, 534);
add(1, 4, 594);
add(1, 4, 534);

restaurant.orderPizza("mushroms", "chicken", "sauce");
//rest is used where variable names are divided by comas and spread is used where variable values are
//divided by comas.
