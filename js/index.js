const taskInfo = new taskManager();
taskInfo.load();
taskInfo.render();
let submitBtn = document.getElementById('submit');
submitBtn.addEventListener("click", validFormFieldInput);
//submitBtn.addEventListener("click", taskInfo.rend);
function validFormFieldInput(data) {
    data.preventDefault();
    const taskName = document.getElementById("taskname").value;
    const taskDescription = document.getElementById("taskdesc").value;
    const taskAssignedBy = document.getElementById("assignedby").value;
    const taskAssignedDate = document.getElementById("assigneddate").value;
    const taskAssignedTo = document.getElementById("assignedto").value;
    const taskDueDate = document.getElementById("duedate").value;
    let errormessage = "";
    //errormessage.style.display = 'block' question: how do I display and hide? how do i reset?
    if (
        taskname === ''
        || taskDescription === ''
        || taskAssignedBy === ''
        || taskAssignedDate === ''
        || taskAssignedTo === ''
        || taskDueDate === ''
    ) {
        if (taskName === '') {
            errormessage += "Please Enter Task name";
        }
        else if (taskDescription === '') {
            errormessage += "Please Enter Task Description";
        }
        else if (taskAssignedBy === '') {
            errormessage += "Please Enter Assigned By Information";
        }
        else if (taskAssignedDate === '') {
            errormessage += "Please Enter Assigned Date Information";
        }
        else if (taskAssignedTo === '') {
            errormessage += "Please Enter Assigned To Information";
        }
        else if (taskDueDate === '') {
            errormessage += "Please Enter Due Date Information";
        }
    }
    if (errormessage != "") {
        alert(errormessage);
    }
    else {
        taskInfo.addTask(taskName, taskDescription, taskAssignedBy, taskAssignedDate, taskAssignedTo, taskDueDate)
        console.log(taskInfo.tasks);
        taskInfo.save();
    }
    taskInfo.render();
}
//step 7 part 2 and step 9 part 3
const myTaskList = document.querySelector("#tasksList");
myTaskList.addEventListener('click', (event) => {
    if (event.target.classList.contains("done-button")) {
        const cardBodyEl = event.target.parentElement.parentElement;
        console.log(cardBodyEl.id);
        const task = taskInfo.getTaskById(cardBodyEl.id);
        task.status = "DONE";
        console.log(task);
        taskInfo.render();
    }
    if (event.target.classList.contains("delete-button")) {
        const cardBodyEl = event.target.parentElement.parentElement
        console.log(cardBodyEl.id);
        // deleteTask = parentTask;
    }
})
    // taskManager.deleteTask(taskId);
    // taskManager.save();
    // taskManager.render()