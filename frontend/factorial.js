// let arr=[];
// let num =parseInt(prompt("Enter a number: "));

// for(let i = 1;i<=num;i++) {
//   arr.push(i);
//   console.log(arr);
// }

// const red = (a,b)=> {
//   return a*b;
// }
// console.log(arr.reduce(red));

let a = 5;
function factorial(number) {
  let arr = Array.from(Array(number+1).keys());
  let sliced = arr.slice(1,);
  console.log(sliced);
  let c = sliced.reduce((a , b)=>{
    return a*b
  })
  console.log(c);
}
factorial(a);



