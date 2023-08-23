    const taskList = document.querySelector("#task-list");
    const newToDO = document.querySelector("#newToDo");
    const submitButton = document.querySelector("#submit-button");

    submitButton.addEventListener('click', function(e) {
        e.preventDefault();
        const newToDoInput = newToDO.value;
        if (newToDoInput.trim() !== '') {
            const createLi = document.createElement('li');
            const toDoText = document.createElement('span');
            toDoText.textContent = newToDoInput;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-button');
            removeButton.addEventListener('click', function() {
                createLi.remove();
            });

            createLi.appendChild(toDoText);
            createLi.appendChild(removeButton);

            taskList.appendChild(createLi);
            newToDO.value = '';
        }
    });

    taskList.addEventListener('click', function(e) {
        if (e.target.classList.contains('remove-button')) {
            const listItem = e.target.closest('li');
            listItem.remove();
        } else if (e.target.tagName === 'LI') {
            e.target.classList.toggle('completed');
        }
    });


