// // Напиши скрипт для створення галереї зображень на підставі
//  масиву даних. HTML містить список ul.gallery.

// // <ul class="gallery"></ul>

// // Використовуй масив об'єктів images для створення елементів
// < img >, вкладених в < li >.Для створення розмітки використовуй
//  шаблонні рядки і метод insertAdjacentHTML().

// // Усі елементи галереї повинні додаватися в DOM за одну
// операцію додавання.
// // Додай мінімальне оформлення галереї флексбоксами
//  або грідами через CSS класи.
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");
const picture = images
  .map(
    (image) =>
      `<li class = "list-item"><img class ="list-image" src = ${image.url} alt = ${image.alt}/></li>`
  )
  .join("");
console.log(picture);
gallery.insertAdjacentHTML("afterbegin", picture);
const list = document.querySelector(".gallery");
list.style.display = "flex";
list.style.textAlign = "center";
list.style.flexDirection = "column";
list.style.gap = "40px";
list.style.padding = "0";
list.style.margin = "0";
list.style.listStyle = "none";

const photos = document.querySelectorAll(".list-image");

photos.forEach((item) => (item.style.width = "100vw"));

//Потрібна допомога!!! Не можу зрозуміти ,як правильно
//  прописати стилі для класу "list-image"
