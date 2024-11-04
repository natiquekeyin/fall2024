const box1 = document.querySelector("#box1Count");
const box2 = document.querySelector("#box2Count");
const left = document.querySelector("#left-arrow");
const right = document.querySelector("#right-arrow");

let totalBalls = 10;
let box2Count = 0;
let box1Count = totalBalls - box2Count;

box1.innerText = box1Count;
box2.innerText = box2Count;
right.addEventListener("click", () => {
  if (box1Count > 0) {
    box1Count--;
    box1.innerText = box1Count;
    box2Count++;
    box2.innerText = box2Count;
  }
});

left.addEventListener("click", () => {
  if (box2Count > 0) {
    box1Count++;
    box1.innerText = box1Count;
    box2Count--;
    box2.innerText = box2Count;
  }
});
