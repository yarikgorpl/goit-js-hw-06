const decrementBtn = document.querySelector('button[data-action="decrement"]');

const incrementBtn = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

const onIncrementClick = () => {
  counterValue += 1;

  updateCounter(counterValue);
};

const onDecrementClick = () => {
  counterValue -= 1;

  updateCounter(counterValue);
};
const number = document.getElementById("value");
function updateCounter(counterValue) {
  number.innerHTML = counterValue;
}

incrementBtn.addEventListener("click", onIncrementClick);
decrementBtn.addEventListener("click", onDecrementClick);
