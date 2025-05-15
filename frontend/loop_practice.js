let number = 14;
let userinput;

while(userinput != number) {
  userinput = prompt("Guess the number");
  if(userinput != number) {
    console.log("Try again");
  }
}
