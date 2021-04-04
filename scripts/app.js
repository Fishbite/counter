// app code
let count = 0;

const value = document.getElementById("value"); // value to change on page
const btns = document.querySelectorAll(".btn"); //create a node list which is array like

//itterate over the node list of btns
btns.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    const list = event.currentTarget.classList;
    if (list.contains("decrease")) {
      count--;
    } else if (list.contains("increase")) {
      count++;
    } else if (list.contains("reset")) {
      count = 0;
    }
    value.textContent = count;
    if (count > 0) value.style.color = "green";
    if (count < 0) value.style.color = "red";
    if (count === 0) value.style.color = "black";
  });
});
