let adjectives = {
  1: "crazy",
  2: "amazing",
  3: "fire",

}

let shopname = {
  1: "engine",
  2: "food",
  3: "garments",
}

let others = {
  1: "bros",
  2: "limited",
  3: "hub",
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}


for (let i = 0; i < 10; i++) {
  let r1 = Math.floor(Math.random() * 3) + 1;
  let r2 = Math.floor(Math.random() * 3) + 1;
  let r3 = Math.floor(Math.random() * 3) + 1;


  console.log(`${capitalize(adjectives[r1])} ${capitalize(shopname[r2])} ${capitalize(others[r3])}` );

}

