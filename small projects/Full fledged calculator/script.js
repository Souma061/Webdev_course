let display = document.getElementById("display");
let buttons = document.querySelectorAll(".btn");

let resultDisplayed = false;
let currentInput = "";

buttons.forEach(button=>{
  button.addEventListener("click" , () => {
    const action = button.dataset.action;

    if(!action) return;

    if(action === "clear") {
      currentInput = "";
      display.textContent = "0";
      return;
    }

    if(action === "back") {
      currentInput = currentInput.slice(0 , -1);
      display.textContent = currentInput || "0";
    }
    if(action === "=") {
      try {
        
      }
    }
  })

})
