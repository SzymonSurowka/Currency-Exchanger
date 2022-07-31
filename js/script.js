let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let inputCurrencyElement = document.querySelector(".js-inputCurrency");
let outputCurrencyElement = document.querySelector(".js-outputCurrency");
let resultElement = document.querySelector(".js-result");

let pln = 1;
let eur = 4.76;
let usd = 4.68;
let gbd = 5.57;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let inputCurrency = inputCurrencyElement.value;
    let outputCurrency = outputCurrencyElement.value;
    let amount = amountElement.value;

    switch (inputCurrency) {
        case "PLN":
            if (outputCurrency === "PLN") result = (amount * 1);
            else if (outputCurrency === "EUR") result = (amount * pln / eur);
            else if (outputCurrency === "USD") result = (amount * pln / usd);
            else if (outputCurrency === "GBD") result = (amount * pln / gbd);
            break;
        case "EUR":
            if (outputCurrency === "EUR") result = (amount * 1);
            else if (outputCurrency === "USD") result = (amount * eur / usd);
            else if (outputCurrency === "GBD") result = (amount * eur / gbd);
            else if (outputCurrency === "PLN") result = (amount * eur / pln);
            break;
        case "USD":
            if (outputCurrency === "USD") result = (amount * 1);
            else if (outputCurrency === "EUR") result = (amount * usd / eur);
            else if (outputCurrency === "GBD") result = (amount * usd / gbd);
            else if (outputCurrency === "PLN") result = (amount * usd / pln);
            break;
        case "GBD":
            if (outputCurrency === "GBD") result = (amount * 1);
            else if (outputCurrency === "EUR") result = (amount * gbd / eur);
            else if (outputCurrency === "USD") result = (amount * gbd / usd);
            else if (outputCurrency === "PLN") result = (amount * gbd / pln);
            break;
    }

    resultElement.innerText = `${result.toFixed(2)} ${outputCurrencyElement.value}`;
});

