let random = Math.random();
let a = prompt("Enter first number");
let b = prompt("Enter second number");
let c = prompt("Enter operation");

let obj = {
  "+" : "-",
  "*" : "+",
  "-" : "/",
  "/" : "**",
}

if(random > 0.1) {
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else {
  c = obj[c];
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`)

}
