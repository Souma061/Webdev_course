let actualNumber = Math.floor(Math.random() * 100) + 1;
let guess;
let attempts = 0;

while(guess !== actualNumber) {
  guess = parseInt(prompt("Guess a Number between 1 and 100: "));
  attempts++;

  if(isNaN(guess)) {
    alert("Please enter a valid number");
    attempts--;
    continue;
  }

  if(guess > actualNumber) {
    alert("Too High! Guess smaller.");
  }
  else if(guess < actualNumber) {
    alert("Too Low! Guess larger.");
  }
  else {
    alert(`Congratulations! You guessed the number ${actualNumber} in ${attempts} attempts.`);
  }
}

