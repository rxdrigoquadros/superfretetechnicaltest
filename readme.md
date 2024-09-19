# SuperFrete Technical test

Foobar is a Python library for dealing with word pluralization.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install dependencies.

```bash
npm install
```

## Usage

```javascript
npm run test:chrome
```

## Test case

```javascript
Given A user visit superfrete calculation page
When Fill origin post code with "08090-284"
And Select weight "Até 300g"
And Fill package height with "2"
And Fill package width with "11"
And Fill package depth with "16"
And Fill destination post code with "05407-002"
And Click to calculate shipping amount
Then should be visible PAC option
And should be visible SEDEX option
And should be visible Mini Envios option

Given A user visit superfrete calculation page
When Fill origin post code with "08090-284"
And Select weight "Até 300g"
And Fill package height with "0.3"
And Fill package width with "11"
And Fill package depth with "16"
And Fill destination post code with "05407-002"
And Click to calculate shipping amount
Then should not be calculate 
And show error message "Altura mínima 0.4 cm."

Given A user visit superfrete calculation page
When Fill origin post code with "08090-284"
And Select weight "Até 300g"
And Fill package height with "2"
And Fill package width with "7.9"
And Fill package depth with "16"
And Fill destination post code with "05407-002"
And Click to calculate shipping amount
Then should not be calculate 
And show error message "Largura mínima 8 cm."

Given A user visit superfrete calculation page
When Fill origin post code with "08090-284"
And Select weight "Até 300g"
And Fill package height with "2"
And Fill package width with "11"
And Fill package depth with "12.9"
And Fill destination post code with "05407-002"
And Click to calculate shipping amount
Then should not be calculate 
And show error message "Comprimento mínimo 13 cm."

Given A user visit superfrete calculation page
When Fill origin post code with "08090-284"
And Select weight "Até 300g"
And Fill package height with "151"
And Fill package width with "11"
And Fill package depth with "16"
And Fill destination post code with "05407-002"
And Click to calculate shipping amount
Then should not be calculate 
And show error message "Altura máxima 150 cm."

Given A user visit superfrete calculation page
When Fill origin post code with "08090-284"
And Select weight "Até 300g"
And Fill package height with "2"
And Fill package width with "151"
And Fill package depth with "16"
And Fill destination post code with "05407-002"
And Click to calculate shipping amount
Then should not be calculate 
And show error message "Largura máxima 150 cm."

Given A user visit superfrete calculation page
When Fill origin post code with "08090-284"
And Select weight "Até 300g"
And Fill package height with "2"
And Fill package width with "11"
And Fill package depth with "151"
And Fill destination post code with "05407-002"
And Click to calculate shipping amount
Then should not be calculate 
And show error message "Comprimento máximo 150 cm."

Given A user visit superfrete calculation page
When Fill origin post code with "08090-284"
And Select weight "Até 300g"
And Fill package height with "101"
And Fill package width with "101"
And Fill package depth with "101"
And Fill destination post code with "05407-002"
And Click to calculate shipping amount
Then should not be calculate 
And show error message "a soma resultante da altura + largura + comprimento não deve superar 300 cm."
```
