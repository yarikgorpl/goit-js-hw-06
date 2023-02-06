const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");
inputText.addEventListener("input", (event) => {
  if (event.currentTarget.value.trim() !== "") {
    return (outputText.textContent = event.currentTarget.value);
  }
  return (outputText.textContent = "Anonymous");
});
