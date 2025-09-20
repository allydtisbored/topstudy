// TO-DO LIST
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  if (taskInput.value.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = taskInput.value;
  li.onclick = () => li.classList.toggle("done");
  taskList.appendChild(li);

  taskInput.value = "";
}

// POMODORO TIMER
let timer;
let minutes = 25;
let seconds = 0;

function startTimer() {
  clearInterval(timer);
  timer = setInterval(() => {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(timer);
        alert("Pomodoro finished!");
        return;
      }
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }
    updateDisplay();
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  minutes = 25;
  seconds = 0;
  updateDisplay();
}

function updateDisplay() {
  const timerDisplay = document.getElementById("timer");
  timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

// THEME TOGGLE
document.getElementById("toggleTheme").onclick = () => {
  document.body.classList.toggle("dark");
};

// Initialize display
updateDisplay();
