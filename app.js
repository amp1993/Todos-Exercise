const form = document.querySelector("#form");
const taskList = document.querySelector("#task-list");

subitButton.addEventListener('click',function(e){
    e.preventDefault();
    const newToDoInput = newToDo.value
    if(newToDoInput !== ''){
        const createLi = document.createElement('li');
        createLi.textContent = newToDoInput;
        taskList.appendChild(createLi);
        newToDoInput.value = '';
    }
});



