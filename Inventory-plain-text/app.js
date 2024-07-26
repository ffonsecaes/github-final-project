const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
let tasks = [];

function addTask() {
            const taskText = taskInput.value.trim();
            if (taskText !== "") {
                tasks.push({ text: taskText});
                taskInput.value = "";
                console.log(tasks);
                displayTasks();
            }
        }

        function displayTasks() {
            // Primero, limpiamos la lista de tareas existente
            while (taskList.firstChild) {
                taskList.removeChild(taskList.firstChild);
            }
        
            // Luego, iteramos sobre cada tarea y creamos los elementos necesarios
            tasks.forEach((task, index) => {
                const li = document.createElement("li");
                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.id = `task-${index}`;
                checkbox.checked = task.completed;
                checkbox.addEventListener("change", () => toggleTask(index));
        
                const label = document.createElement("label");
                label.htmlFor = `task-${index}`;
                label.textContent = task.text;
        
                // Agregamos el checkbox y el label al elemento li
                li.appendChild(checkbox);
                li.appendChild(label);
        
                // Finalmente, agregamos el li a la lista de tareas
                taskList.appendChild(li);
            });
        }

                function toggleTask(index) {
            tasks[index].completed = !tasks[index].completed;
            displayTasks();
        }

            function clearCompletedTasks() {
            tasks = tasks.filter(task => !task.completed);
            displayTasks();
        }

        addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);

 displayTasks();