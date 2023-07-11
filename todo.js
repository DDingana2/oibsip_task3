// Get references to the HTML elements
const taskInput = document.getElementById('taskInput');
const pendingTasks = document.getElementById('pendingTasks');
const completedTasks = document.getElementById('completedTasks');

// Store tasks in an array
let tasks = [];

// Function to add a new task
function addTask() {
  const task = taskInput.value.trim();
  if (task !== '') {
    tasks.push({
      task,
      completed: false,
      added: new Date(), // Add the current date and time
      completedDate: null // Initialize completed date to null
    });
    renderTasks();
    taskInput.value = '';
  }
}

// Function to mark a task as complete
function completeTask(index) {
  tasks[index].completed = true;
  tasks[index].completedDate = new Date(); // Add the current date and time
  renderTasks();
}

// Function to delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Function to render the tasks on the page
function renderTasks() {
  pendingTasks.innerHTML = '';
  completedTasks.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    const taskText = document.createElement('span');
    taskText.innerText = task.task;
    li.appendChild(taskText);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = () => deleteTask(index);
    deleteButton.id ="delete-button";
    li.appendChild(deleteButton);

    if (task.completed) {
      li.classList.add('completed');
      completedTasks.appendChild(li);
    } else {
      const completeButton = document.createElement('button');
      completeButton.innerText = 'Complete';
      completeButton.onclick = () => completeTask(index);
      completeButton.id="complete-button";
      li.appendChild(completeButton);
      pendingTasks.appendChild(li);
    }
  });
}

// Initial rendering of tasks
renderTasks();
