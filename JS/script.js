const newTaskInput = document.getElementById("new-task");
const taskList = document.querySelector("#task-list");
function addTask() {
  if (newTaskInput.value === "") {
    alert("Please add a task");
  } else {
    let listItem = document.createElement("li");
    listItem.innerHTML = newTaskInput.value;
    taskList.appendChild(listItem);
    newTaskInput.value = "";
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    listItem.appendChild(span);
    saveList();
  }
}

taskList.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveList();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveList();
    }
  },
  false
);

function saveList() {
  localStorage.setItem("task-data", taskList.innerHTML);
}
function showList() {
  taskList.innerHTML = localStorage.getItem("task-data");
}
showList();

const toggleSwitch = document.getElementById("toggle-switch");
const animatedBox = document.querySelector(".task-app");

toggleSwitch.addEventListener("change", function () {
  if (toggleSwitch.checked) {
    console.log("Turned On");
    animatedBox.style.animation = "liquid 8s infinite";
  } else {
    console.log("Turned Off");
    animatedBox.style.animation = "none";
  }
});
