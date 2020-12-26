import { formatAmountWithCurrency } from "./formatter";

export default function ({
  amount = 0,
  locale = "en-US",
  currencyDisplay = "code",
  currency = "",
}) {
  return formatAmountWithCurrency({
    locale,
    cost: amount,
    currencyDisplay,
    currency,
  });
}
