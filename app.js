    const taskList = document.querySelector("#task-list");
    const newToDo = document.querySelector("#newToDo");
    const submitButton = document.querySelector("#submit-button");

    const savedTasks=JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(savedTasks => {
            const createLi = document.createElement('li');
            const toDoText = document.createElement('span');
            toDoText.textContent = savedTasks.text;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'X';
            removeButton.classList.add('remove-button');
            removeButton.addEventListener('click', function() {
            createLi.remove();
            updateLocalStorage();
            });
        createLi.appendChild(toDoText);
        createLi.appendChild(removeButton);
        createLi.classList.toggle('complete.savedTask.completed');

        taskList.appendChild(createLi);
    });


    submitButton.addEventListener('click', function(e) {
        e.preventDefault();
        const newToDoInput = newToDo.value;
        if (newToDoInput.trim() !== '') {
            const createLi = document.createElement('li');
            const toDoText = document.createElement('span');
            toDoText.textContent = newToDoInput;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'X';
            removeButton.classList.add('remove-button');
            removeButton.addEventListener('click', function() {
            createLi.remove();
            updateLocalStorage();
            });
            createLi.appendChild(toDoText);
            createLi.appendChild(removeButton);

            taskList.appendChild(createLi);
            newToDo.value = '';

            updateLocalStorage();
        }
    });
    taskList.addEventListener('click', function(e) {
        if (e.target.classList.contains('remove-button')) {
            const listItem = e.target.closest('li');
            listItem.remove();
            updateLocalStorage();
        } else if (e.target.tagName === 'SPAN') {
            e.target.classList.toggle('completed');
            updateLocalStorage();
        }
    });
    function updateLocalStorage() {
        const tasks = Array.from(taskList.querySelectorAll('li')).map(li => ({
            text: li.querySelector('span').textContent,
            completed: li.querySelector('span').classList.contains('completed')
        }));
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
