// Define exchange rates (to USD) for example currencies
const exchangeRates = {
  USD: 1,
  EUR: 0.85,
  JPY: 110.93,
  // Add more exchange rates here
};

// Populate currency select options dynamically
const fromCurrencySelect = document.getElementById("from");
const toCurrencySelect = document.getElementById("to");

for (const currency in exchangeRates) {
  const option1 = document.createElement("option");
  option1.value = currency;
  option1.textContent = currency;
  
  const option2 = document.createElement("option");
  option2.value = currency;
  option2.textContent = currency;

  fromCurrencySelect.appendChild(option1);
  toCurrencySelect.appendChild(option2);
}

document.getElementById("convert").addEventListener("click", () => {
  const amount = parseFloat(document.getElementById("amount").value);
  const fromCurrency = document.getElementById("from").value;
  const toCurrency = document.getElementById("to").value;

  const convertedAmount = amount * (exchangeRates[toCurrency] / exchangeRates[fromCurrency]);

  document.getElementById("result").textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
});
