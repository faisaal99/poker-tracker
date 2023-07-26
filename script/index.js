import { Poker } from './poker.js';
const ptInput = document.querySelector(".pt-input");
const ptButtonCreate = document.querySelector(".pt-button");
let pokerGame;
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
    var _a, _b;
    pokerGame = new Poker(ptInput.value);
    (_a = ptInput.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(ptInput);
    (_b = ptButtonCreate.parentElement) === null || _b === void 0 ? void 0 : _b.removeChild(ptButtonCreate);
});
// For startup
ptButtonCreate.disabled = true;
ptButtonCreate.classList.add("disabled");
