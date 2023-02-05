// Напиши скрипт управління формою логіна.
// Обробка відправлення форми form.login - form повинна відбуватися
// відповідно до події submit.Під час відправлення форми сторінка
// не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням
// про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери
// значення полів в об'єкт, де ім'я поля буде ім'ям властивості,
// а значення поля - значенням властивості.
// Для доступу до елементів форми використовуй властивість
// elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення
// полів форми методом reset.

const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);
const email = form.elements.email;
const pswd = form.elements.password;

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;

  if (email.value === "" || pswd.value === "") {
    return alert("Bсі поля повинні бути заповнені");
  }
  alert("Форма сформована");
  const formData = { mail, password };
  console.log(formData);
  event.currentTarget.reset();
}

// const formData = new FormData(event.currentTarget);
// console.log(formData);
// formData.forEach((value, name) => {
// console.log("name", name);
// console.log("value", value);
// })
