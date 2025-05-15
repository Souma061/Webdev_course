// let a = "souma"
// console.log(a.toUpperCase();


// let c = "harry"
// console.log("har\"".length)


let str = "please give rs 1000";
let match = str.match(/rs\s*(\d+)/i);

if (match) {
  let amount = match[1];  // "1000"
  console.log(amount);
} else {
  console.log("No amount found");
}

