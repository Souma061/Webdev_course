// document.title = "website using js";
// document.body.style.backgroundColor="lightblue";
// document.body.style.fontFamily="Arial, sans-serif";

// let boxes = document.getElementsByClassName("box");

// console.log(boxes)

// boxes[1].style.backgroundColor="red";


// document.querySelector(".box").style.backgroundColor="red";

// document.querySelectorAll(".box").forEach( e => {
  //   e.style.backgroundColor="beige";
  // }
  // )

  // document.getElementById("box1").style.backgroundColor="green";
  // document.getElementById("box2").style.backgroundColor="red";
  // document.getElementById("box3").style.backgroundColor="blue";
  // document.getElementById("box4").style.backgroundColor="beige";
  // document.getElementById("box5").style.backgroundColor="seagreen";



let boxes = document.querySelector(".container").children;

function randomcolor() {
  color1 = Math.ceil(0 + Math.random() * 255);
  color2 = Math.ceil(0 + Math.random() * 255);
  color3 = Math.ceil(0 + Math.random() * 255);

  return `rgb(${color1},${color2},${color3})`;
}

Array.from(boxes).forEach(e=> {
  e.style.backgroundColor = randomcolor();
  e.style.color = randomcolor();
})
