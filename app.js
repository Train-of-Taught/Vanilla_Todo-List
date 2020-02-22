const dateDisplay = document.querySelector("card-header__date");
const motivation = document.querySelector("card-header__motivation");

const pendingList = document.querySelector("[data-list-pending]");
const completedList = document.querySelector("[data-list-completed]");
const overdueList = document.querySelector("[data-list-overdue]");

const taskInput = document.querySelector(".input-group__tex");
const addButton = document.querySelector(".input-group__btn");

let deleteButtons;
let dateButtons;

let motivationArray = [
  `Make today the best day!`,
  `Proper Planning Prevents Poor Performance!`,
  `Win the day!`,
  `Today is your day!`,
  `Success = Good Plan + Action`
];

(function () {
  let random = Math.floor(Math.random() * Math.floor(5));
  motivation.innerHTML = motivationArray[random];
})();