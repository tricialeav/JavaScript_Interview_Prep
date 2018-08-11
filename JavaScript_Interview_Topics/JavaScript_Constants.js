/* Constants in JavaScript are variables that are typically included at the top of
a JavaScript file
Naming conventions: typically capitalized with unerscores between multiple words
These are used to portray information that is unlikely to change (prior to the
addition of the "const" keyword in ES6 */

var TAX_RATE = .15; 
var grossIncome = 60000; 

function netIncome(taxes, income) {
    return (income - (income * taxes));
}

netIncome(TAX_RATE, grossIncome); 