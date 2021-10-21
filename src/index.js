const form = document.querySelector("form")
const ulList= document.getElementById("tasks")

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("submit", createList)
});

function createList(todo) {
  todo.preventDefault()
  const task = document.querySelector("#new-task-description")
  const newList = document.createElement("li")
  newList.textContent = task.value
  ulList.append(newList)  
  task.value = " "
}






// <form id="create-task-form" action="#" method="POST">
//       <label for="new-task-description">Task description:</label>
//       <input type="text" id="new-task-description" name="new-task-description" placeholder="description">
//       <input type="submit" value="Create New Task">
//     </form>