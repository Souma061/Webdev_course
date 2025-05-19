// async function getData() {
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       resolve("4556");
//     }, 3000);
//   })
// }
async function getData() {
  const url = "./products.json"; // relative to your HTML file

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

async function main() {
  console.log("Fetching data...");
  console.log("waiting for data...");

  let data = await getData();
  console.log("Data received: ", data);
  console.log("Data processing...");
  console.log("Data processed successfully");
}

main();

