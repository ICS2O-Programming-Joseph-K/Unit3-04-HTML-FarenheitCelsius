'use strict'
// Fahrenheit to celsius 
function enterClicked () {

  // get fahrenheit from text field
  let Fahrenheit = parseFloat(document.getElementById("F").value)

  // calculate fahrenheit to celsius
  let celsius = 5/9 * (Fahrenheit - 32);

  // let celsius = float(5)/float(9) * (Fahrenheit - 32); works too

  // display calculated result to user
  document.getElementById('user-info').innerHTML = "The volume of your sphere is " + celsius.toFixed(0) + " <sup>°C</sup>"
}
