const newTaskInput =  document.getElementById('new-task');
const taskList = document.getElementById('task-list');
function addTask() {
    if(newTaskInput.value === '') {
        alert('Please add a task');
    } else {
        let listItem = document.createElement('li');
        listItem.innerHTML = newTaskInput.value;
        taskList.appendChild(listItem);
        newTaskInput.value = '';
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        listItem.appendChild(span);
        saveList();
    }

}

taskList.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveList();
    } else if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveList();
    } 
    }, false);

    function saveList() {
        localStorage.setItem("task-data", taskList.innerHTML);
    }
    function showList() {
        taskList.innerHTML = localStorage.getItem("task-data");
    }
    showList()