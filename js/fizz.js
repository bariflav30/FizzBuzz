// Prompts the user to pick a number

var number = prompt("Pick a number to FizzBuzz up to!");

for (i=1; i<=number; i++) {
  if (i%15===0) {
    document.write("FizzBuzz<br>");
  }
  else if (i%3===0) {
    document.write("Fizz<br>");
  }
  else if (i%5===0) {
    document.write("Buzz<br>");
  }
  else {
    document.write(i+"<br>");
  }
}