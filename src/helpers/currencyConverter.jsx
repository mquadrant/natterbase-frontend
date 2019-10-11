export function currencyConverter(amount) {
  return parseFloat(amount).toLocaleString("en-US");
}

export function numberConverter(number) {
  return parseInt(number).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false
  });
}
