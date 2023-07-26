const ptInput = document.querySelector(".pt-input") as HTMLInputElement;
const ptButtonCreate = document.querySelector(".pt-button") as HTMLButtonElement;

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
  console.log(`input.value = ${ptInput.value}`);
});


// For startup
ptButtonCreate.disabled = true;
ptButtonCreate.classList.add("disabled");
