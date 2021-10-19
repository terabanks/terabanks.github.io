
//Selectors
const taskInput = document.querySelector(".task-input");
const submitBtn = document.querySelector(".submit-btn");
const todoList = document.querySelector(".todo-list");
const editTask = document.querySelector("edit-btn");

//Event Listeners
submitBtn.addEventListener("click", addTask);
todoList.addEventListener("click", taskOptions);

//Functions
function addTask(e) {
    //Prevent automatic form submission
    e.preventDefault();

    //If task field is empty, prompt alert message.
    if (taskInput.value === '') {
        alert('Please enter a task!');
    }

    if (taskInput.value !== '') {
        //Create 'todo div' to hold new tasks
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        //Create 'new task' list items & place inside 'todo div'
        const newTask = document.createElement("li");
        newTask.innerText = taskInput.value;
        newTask.classList.add("todo-item");
        todoDiv.appendChild(newTask); //Adds new task to the 'todo div' container
        taskInput.value = "";

        //Create Edit Button Inside Todo Div
        const editBtn = document.createElement("button");
        editBtn.innerHTML = '<i class="fas fa-pencil-alt"></i>'; //Adds edit icon to button
        editBtn.classList.add("edit-btn");
        editBtn.onclick = function () {
            editTodo(newTask);
        }
        todoDiv.appendChild(editBtn); //Adds edit button to the 'todo div' container

        //Create Check Mark Button Inside Todo Div
        const completedBtn = document.createElement("button");
        completedBtn.innerHTML = '<i class="fas fa-check"></i>'; //Adds check mark icon to button
        completedBtn.classList.add("complete-btn");
        todoDiv.appendChild(completedBtn); //Adds check mark button to the 'todo div' container

        //Create Delete Button Inside Todo Div
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = '<i class="far fa-trash-alt"></i>'; //Adds trash can icon to button
        deleteBtn.classList.add("delete-btn");
        todoDiv.appendChild(deleteBtn); //Adds delete button to the 'todo div' container

        //Append Todo List to new Div
        todoList.appendChild(todoDiv);
    }
}

function taskOptions(e) {
    console.log(e.target);

    const item = e.target;
    //Delete Task 
    if (item.classList[0] === "delete-btn") {
        const todo = item.parentElement;
        //Animation- Deleted item falls away
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function () {
            todo.remove();
        });
    }

    //Check Mark - Completed Task
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function editTodo(e) {
    const editValue = prompt('edit the select item', e.firstChild.nodeValue);
    e.firstChild.nodeValue = editValue;
}
