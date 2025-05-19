console.log("Hello world");

let prom1 = new Promise((resolve, reject) => {

  let a = Math.random();
  if (a < 0.5) {
    reject("Not supported")
  }
  else {
    setTimeout(() => {
      console.log("I am a programmer")
      resolve("Souma");
    }, 1000);

  }
})

let prom2 = new Promise((resolve, reject) => {

  let a = Math.random();
  if (a < 0.5) {
    reject("Not supported at all")
  }
  else {
    setTimeout(() => {
      console.log("I am a hacker")
      resolve("Souma 2");
    }, 1000);

  }
})


let p3 = Promise.any([prom1, prom2])

p3.then((a) => {
  console.log(a)
}).catch((err) => {
  console.log(err)
})
