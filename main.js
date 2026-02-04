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

//short circuiting
//Javascript operators tend to short circuit under certain conditions like AND operator when there
//are two or more values which are either truthy or falsy , AND operator will return the first truthy
//value.

//OR operator can pass any data type.
// OR operator:
console.log(0 || 10);
//outcome: 10. Because between 0 and 10 , 10 is a truthy value so it skipped the 0 and returned 10.
console.log(10 || "J");
//outcome: 10. This is another example of OR short circuiting, it is 10 because OR operator sees
//the first truthy value and just returns that , it dont even look at the second one.
console.log(0 || "" || undefined || null);
//outcome: null. in case where all values are falsy, it will simply return the last value.

//A practical example
const guests1 = restaurant.numGuests ? restaurant.numGuests : 12;
console.log(guests1);
//outcome will be 10 because as numGuests dont exist and it is undefined so using ternry operator
//i set a default value of 10.

//More better way of doing this using short circuiting:
const guests2 = restaurant.numGuests || 10;
console.log(guests2);
//outcome: 10 because numguests is undefined , which is a falsy value.

//AND operator
//The AND operator short circuits in a complete opposite way, it returs the first element which is
//flasy, and if all are truthy it will return the last value.
console.log(90 && 0 && 98);
// 0
console.log(9 && "M" && 98);
//98

//practical example:
if (restaurant.orderPizza) {
  restaurant.orderPizza("chicken", "sauce", "mayo");
}
//efficient way using short circuiting:
restaurant.orderPizza && restaurant.orderPizza("chicken", "sauce", "mayo");
