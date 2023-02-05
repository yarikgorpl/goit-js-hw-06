// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const item = [];
const listOfIngredients = document.querySelector("#ingredients");
console.log(listOfIngredients);
ingredients.forEach((element) => {
  const nameOfIngredient = document.createElement("li");
  console.log(nameOfIngredient);
  nameOfIngredient.textContent = `${element}`;
  nameOfIngredient.classList.add("item");
  item.push(nameOfIngredient);
});

listOfIngredients.append(...item);
