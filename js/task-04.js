// Лічильник складається зі спану і кнопок, які по кліку повинні
//  збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне
// значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких
// збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const decrementBtn = document.querySelector('button[data-action="decrement"]');
console.log(decrementBtn.dataset.action); // "decrement"

const incrementBtn = document.querySelector('button[data-action="increment"]');
console.log(incrementBtn.dataset.action); // "increment"
let counterValue = 0;

const onIncrementClick = () => {
  counterValue += 1;
  console.log(counterValue);
  updateCounter(counterValue);
};

const onDecrementClick = () => {
  counterValue -= 1;
  console.log(counterValue);
  updateCounter(counterValue);
};
function updateCounter(counterValue) {
  document.getElementById("value").innerHTML = counterValue;
}

incrementBtn.addEventListener("click", onIncrementClick);
decrementBtn.addEventListener("click", onDecrementClick);
