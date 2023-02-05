// Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і натискає
//  кнопку Створити, після чого рендериться колекція.
//  Натисненням на кнопку Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає один параметр-число.
//  Функція створює стільки < div >, скільки вказано в amount і додає
// їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від
//  попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
//  Використовуй готову функцію getRandomHexColor для отримання кольору.
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
//   у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const wrapper = document.querySelector("#boxes");

buttonCreate.addEventListener("click", createBoxes);
buttonDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = input.value;
  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = 20 + i * 10 + "px";
    box.style.height = 20 + i * 10 + "px";
    wrapper.append(box);
  }
}

function destroyBoxes() {
  wrapper.innerHTML = "";
  input.value = "";
}
