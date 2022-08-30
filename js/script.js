{
    const calculateResult = (inputCurrency, amount, outputCurrency) => {
        const pln = 1;
        const eur = 4.76;
        const usd = 4.68;
        const gbd = 5.57;

        switch (inputCurrency) {
            case "PLN":
                if (outputCurrency === "PLN") return (amount * 1);
                else if (outputCurrency === "EUR") return (amount * pln / eur);
                else if (outputCurrency === "USD") return (amount * pln / usd);
                else if (outputCurrency === "GBD") return (amount * pln / gbd);
            case "EUR":
                if (outputCurrency === "EUR") return (amount * 1);
                else if (outputCurrency === "USD") return (amount * eur / usd);
                else if (outputCurrency === "GBD") return (amount * eur / gbd);
                else if (outputCurrency === "PLN") return (amount * eur / pln);
            case "USD":
                if (outputCurrency === "USD") return (amount * 1);
                else if (outputCurrency === "EUR") return (amount * usd / eur);
                else if (outputCurrency === "GBD") return (amount * usd / gbd);
                else if (outputCurrency === "PLN") return (amount * usd / pln);
            case "GBD":
                if (outputCurrency === "GBD") return (amount * 1);
                else if (outputCurrency === "EUR") return (amount * gbd / eur);
                else if (outputCurrency === "USD") return (amount * gbd / usd);
                else if (outputCurrency === "PLN") return (amount * gbd / pln);
        }
    };

    const updateResultText = (result, outputCurrencyElement) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${result.toFixed(2)} ${outputCurrencyElement.value}`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const inputCurrencyElement = document.querySelector(".js-inputCurrency");
        const outputCurrencyElement = document.querySelector(".js-outputCurrency");

        const inputCurrency = inputCurrencyElement.value;
        const outputCurrency = outputCurrencyElement.value;
        const amount = amountElement.value;

        const result = calculateResult(inputCurrency, amount, outputCurrency);

        updateResultText(result, outputCurrencyElement);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}