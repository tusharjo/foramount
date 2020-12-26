export const formatAmountWithCurrency = (formattingDetails) => {
  let { currencyDisplay, cost, locale, currency } = formattingDetails;
  let currencyDetails = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  if (currency && currencyDisplay) {
    currencyDetails = {
      ...currencyDetails,
      ...formattingDetails,
      style: "currency",
    };
  }
  let numberFormat = new Intl.NumberFormat(locale, currencyDetails);

  // if cost present return amount with currencySymbol
  if (cost >= 0) {
    return numberFormat.format(cost);
  }
  // if cost not present return only currencySymbol
  else {
    return numberFormat
      .formatToParts(cost)
      .filter((cost) => cost.type === "currency")[0]?.value;
  }
};
