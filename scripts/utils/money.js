export function formatCurrency(priceCents) {
  return (priceCents / 100).toFixed(2);
}

export default formatCurrency;
//defualt export = we can use it when we only want to export 1 thing