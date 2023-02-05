// Напиши скрипт, який під час набору тексту в інпуті
// input#name - input(подія input),
// підставляє його поточне значення в span#name - output.

// Якщо інпут порожній,
// у спані повинен відображатися рядок "Anonymous".

const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");
inputText.addEventListener("input", (event) => {
  outputText.textContent = event.currentTarget.value;
  if (outputText.textContent === "") {
    outputText.innerHTML = "Anonymous";
  }
});
