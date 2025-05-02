let taskFormEl=document.getElementById('task-form');
let taskInputEl=document.getElementById('task-input');
let taskListEl=document.getElementById('task-list-el');

//localStorage.clear();
let taskList = localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];

if(taskList.length==0)taskListEl.innerHTML="List is Empty";

taskFormEl.addEventListener('submit',function(e)
{ 
    e.preventDefault();

    if(taskInputEl.value=='')return;

    let task=taskInputEl.value.trim();
    taskList.unshift(task);
    localStorage.setItem('tasks',JSON.stringify(taskList));

    displayTask(taskList);

    taskInputEl.value='';
})

function displayTask(tasks)
{
    if(tasks.length==0)
    {
        taskListEl.innerHTML='';   
    }
    let eachTasks="";
    tasks.forEach((task,index)=>
    {
        eachTasks +=`<li class="list-group-item list-group-item-danger mb-2">
                                <span class="fw-bold">${task}</span>
                                <i class="bi bi-archive-fill float-end br-radius "
                                onclick="deleteTask(${index})"></i>
                                <i class="bi bi-pen-fill float-end br-radius"
                                onclick="updateTask(${index})"></i>
                            </li>`;
    });
    taskListEl.innerHTML=eachTasks;
}
displayTask(taskList);

function deleteTask(id)
{
    taskList.splice(id,1);
    localStorage.setItem('tasks',JSON.stringify(taskList));
    displayTask(taskList);
}

function updateTask(id)
{
    taskInputEl.value=taskList[id];
    taskList.splice(id,1);
    localStorage.setItem('tasks',JSON.stringify(taskList));
    displayTask(taskList);
}
