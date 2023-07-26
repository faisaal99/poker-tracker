"use strict";
const ptInput = document.querySelector(".pt-input");
const ptButtonCreate = document.querySelector(".pt-button");
ptInput === null || ptInput === void 0 ? void 0 : ptInput.addEventListener('input', (e) => {
    const newInput = e.target.value;
    if (newInput === "") {
        ptButtonCreate.disabled = true;
        ptButtonCreate.classList.add("disabled");
    }
    else {
        ptButtonCreate.disabled = false;
        ptButtonCreate.classList.remove("disabled");
    }
});
ptButtonCreate === null || ptButtonCreate === void 0 ? void 0 : ptButtonCreate.addEventListener("click", (_) => {
    console.log(`input.value = ${ptInput.value}`);
});
// For startup
ptButtonCreate.disabled = true;
ptButtonCreate.classList.add("disabled");
