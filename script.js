// Function to add a new task
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  if (taskInput.value.trim() !== '') {
      const taskText = document.createTextNode(taskInput.value);
      const newTask = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';

      checkbox.addEventListener('change', function () {
          if (checkbox.checked) {
              newTask.classList.add('completed');
          } else {
              newTask.classList.remove('completed');
          }
      });

      newTask.appendChild(checkbox);
      newTask.appendChild(taskText);
      taskList.appendChild(newTask);

      // Clear input field
      taskInput.value = '';
  }
}
