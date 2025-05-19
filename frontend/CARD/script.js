function createcard(title, cName, views, monthsOld, duration, thumbnail) {
  let viewsN
  if (views < 1000000) {
    viewsN = Math.floor(views / 1000) + 'k'
  } else if (views > 1000000) {
    viewsN = Math.floor(views / 1000000) + 'M'
  } else {
    viewsN = views
  }
  let html = `<div class="card">
      <div class="img">
        <img
          src="${thumbnail}"
          alt="">
          <div class="capsule">${duration}</div>
      </div>
      <div class="text">
        <h1>${title}</h1>
        <p>${cName} . ${viewsN} views . ${monthsOld} months ago</p>
      </div>
    </div>`
  document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;








}


let button = document.getElementById("btn");
button.addEventListener("click", () => {
  createcard(
    "Introduction to Backend | Sigma web dev video#2",
    "CodewithHarry",
    727000,
    2,
    "31:00",
    "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
  );

})




