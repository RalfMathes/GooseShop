const CURRENCY_FORMATTER = new Intl.NumberFormat("de-DE", {
  currency: "EUR",
  style: "currency",
});

//Formats a number into a fitting currency format (10.99 -> 10.99€; 3 -> 3.00€)
const formatCurrency = (number: number) => {
  return CURRENCY_FORMATTER.format(number);
};

export default formatCurrency;
