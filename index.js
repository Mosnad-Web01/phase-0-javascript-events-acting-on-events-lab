// Your code here
function moveDodgerLeft() {
  const dodger = document.getElementById("dodger"); // Get the dodger element

  // Get current position and move it left by 10px
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    // Prevent moving out of bounds
    dodger.style.left = `${left - 10}px`;
  }
}

function moveDodgerRight() {
  const dodger = document.getElementById("dodger"); // Get the dodger element

  // Get current position and move it right by 10px
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  // Assuming 360px is the right boundary
  if (left < 360) {
    // Prevent moving out of bounds
    dodger.style.left = `${left + 10}px`;
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});
