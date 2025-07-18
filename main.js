const taskInput = document.querySelector("#taskInput");
const addTaskBtn = document.querySelector("#addTaskBtn");
const taskList = document.querySelector("#taskList");

addTaskBtn.addEventListener("click", () => {
  let input = taskInput.value.trim();
  if (input === "") return;

  const li = document.createElement("li");
  li.className = "flex items-center justify-between bg-white p-3 rounded shadow";

  const span = document.createElement("span");
  span.textContent = input;
  span.className = "flex-1";

  const button = document.createElement("button");
  button.innerHTML = '<i class="fa-solid fa-check text-green-600"></i>';
  button.className = "ml-2";
  button.addEventListener("click", () => {
    span.classList.toggle("line-through");
    span.classList.toggle("text-gray-400");
  });

  const button2 = document.createElement("button");
  button2.innerHTML = '<i class="fa-solid fa-xmark text-red-600"></i>';
  button2.className = "ml-2";
  button2.addEventListener("click", () => {
    li.remove(); 
  });

  li.appendChild(span);
  li.appendChild(button);
  li.appendChild(button2);
  taskList.appendChild(li);

  taskInput.value = ""; 
});
