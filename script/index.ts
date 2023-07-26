import { Poker } from './poker.js';

const ptInput = document.querySelector(".pt-input") as HTMLInputElement;
const ptButtonCreate = document.querySelector(".pt-button") as HTMLButtonElement;

let pokerGame!: Poker;

ptInput?.addEventListener('input', (e) => {
  const newInput = (e.target as HTMLInputElement).value;
  
  if (newInput === "") {
    ptButtonCreate.disabled = true;
    ptButtonCreate.classList.add("disabled");
  } else {
    ptButtonCreate.disabled = false;
    ptButtonCreate.classList.remove("disabled");
  }
});


ptButtonCreate?.addEventListener("click", (_) => {
  pokerGame = new Poker(ptInput.value);

  ptInput.parentElement?.removeChild(ptInput);
  ptButtonCreate.parentElement?.removeChild(ptButtonCreate);
});


// For startup
ptButtonCreate.disabled = true;
ptButtonCreate.classList.add("disabled");
