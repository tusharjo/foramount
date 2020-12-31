# ForAmount ₹$

ForAmount is a npm package which can be used to format and display amount
according to your language set. Is more powerful when localizing your website,
hence displaying cost according to the language and country selected.
<br /><br />

### [View the live demo](https://oqnmm.csb.app/)

<br />

## How to use:

### As a React Component

<hr />

`import Formatter from "foramount";`

#### Example in react:

`<Formatter amount="200000" currency="INR" locale="en-IN" />`

<br />

### In NodeJS

<hr />

`const formatter = require("foramount");`

#### Example in NodeJS:

`formatter({amount: "200", currency: "INR" locale: "en-IN" });`

<br />

### Props:

<hr />

| Props           | Values                                                                                           | Description                                                            |
| --------------- | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| amount          | 10000                                                                                            | Pass the amount to be formatted here                                   |
| currency        | ISO 4217 code from https://en.wikipedia.org/wiki/ISO_4217#Active_codes <br/> eg: `INR, USD, IDR` | If left blank, currency unit will not be displayed.                    |
| currencyDisplay | eg: `symbol`, `narrowSymbol`, `code`, `name`                                                     | will display currency unit for the amount set, default is `code`       |
| locale          | eg: `en-US`, `en-IN`, `hi-IN`                                                                    | Is a combination of language code and country code, default is `en-US` |
