async function sleep(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2233);
    }, ms); // Use the ms parameter
  });
}

(async function main() {
  let a = await sleep(1000); // Pass delay here
  console.log(a);            // Logs 2233 after 1 second
  let b = await sleep(1000);
  console.log(b);            // Logs 2233 again after another 1 second
})();
// This is a simple script that uses async/await to handle asynchronous operations.
// It defines a sleep function that returns a promise that resolves after a specified delay. 
