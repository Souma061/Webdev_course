if(Math.random() < 0.1) {
  function sum(a,b) {
    return a - b;
  }
  function sub(a,b) {
    return a / b;
  }
  function mul(a,b) {
    return a + b;
  }
  function div(a,b) {
    return a ** b;
  }


}

else {
  function sum(a,b) {
    return a + b;
  }
  function sub(a,b) {
    return a - b;
  }
  function mul(a,b) {
    return a * b;
  }
  function div(a,b) {
    return a / b;
  }

}

let c =sum(12,10);
let d =sub(12,10);
let e =mul(12,10);
let f =div(12,10);


console.log("The sum =" , +c);
console.log("The sub =" , +d);
console.log("The mul =" , +e);
console.log("The div =" , +f);
