// Напиши скрипт, який під час втрати фокусу на інпуті
// (подія blur), перевіряє його вміст щодо правильної
//  кількості введених символів.
// Яка кількість символів повинна бути в інпуті,
// зазначається в його атрибуті data - length.
// Якщо введена правильна кількість символів,
// то border інпуту стає зеленим,
// якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS - класи valid
// і invalid,які ми вже додали у вихідні файли завдання.
const textInput = document.querySelector("#validation-input");
const length = textInput.dataset.length;

textInput.addEventListener("blur", () => {
  if (textInput.value.length !== Number(length)) {
    console.log("length:", textInput.value.length);
    return textInput.classList.add("invalid");
  }
  console.log("length:", textInput.value.length);
  textInput.classList.remove("invalid");
  return textInput.classList.add("valid");
});
