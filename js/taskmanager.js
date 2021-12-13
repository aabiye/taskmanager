const createTaskHtml = (id, name, description, assignedBy, assignedDate, assignedTo, dueDate, status) => {
    const html = `
    <div class="card w-50">
        <div class="card-body" id="${id}">
            <h5 class="card-title"> Task ${id} </h5>
            <br>
                <p class="card-text"> Task Name: ${name}</p>
                <p class="card-text"> Task Description: ${description}</p>
                <p class="card-text"> Assigned By: ${assignedBy}</p>
                <p class="card-text"> Assigned Date: ${assignedDate}</p>
                <p class="card-text"> Assigned To: ${assignedTo}</p>
                <p class="card-text"> Due Date: ${dueDate}</p>
                <p class="card-text"> Status: ${status}</p>
                <br>
            <div>
                <button type="button"  class="btn btn-primary btn-sm done-button" >Mark As Done</button>
            </div>
            <br>
            <div>
                <button type="button" class="btn btn-danger btn-sm delete-button" >Delete</button>
            </div>
        </div >
    </div >`
    return html;
}
class taskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }
     save() {
        let tasksJson= JSON.stringify(this.tasks);
        localStorage.setItem("tasks", tasksJson);
        let currentId= String(this.currentId);
        localStorage.setItem("currentId", currentId);
     }
     load () {
        if (localStorage.getItem("tasks")) {
            let tasksJson= localStorage.getItem("tasks");
            this.tasks= JSON.parse(tasksJson)
            }
        if (localStorage.getItem("currentId")) {
            let currentId= localStorage.getItem("currentId");
            this.currentId=Number(currentId)
            }
        }
    addTask(name, description, assignedBy, assignedDate, assignedTo, dueDate, status) {
        this.tasks.push({
            id: this.currentId,
            name: name,
            description: description,
            assignedBy: assignedBy,
            assignedDate: assignedDate,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: "TODO"
        });
        this.currentId++
    }
    render() {
        let tasksHtmlList = [];
        for (let i = 0; i < this.tasks.length; i++) {
            const currentTask = this.tasks[i];
            console.log(currentTask);
            // const date1 = constructor(Date) {
            //     this.dueDate = dueDate }
            // const formattedDate = date();
            const taskHtml = createTaskHtml(currentTask.id,
                currentTask.name,
                currentTask.description,
                currentTask.assignedBy,
                currentTask.assignedDate,
                currentTask.assignedTo,
                currentTask.dueDate,
                currentTask.status)
            tasksHtmlList.push(taskHtml);
        }
        const tasksHtml = tasksHtmlList.join("\n ");
        const tasksList = document.querySelector("#tasksList");
        tasksList.innerHTML = tasksHtml;
    }
    //step 7 part 4
    getTaskById(taskId) {
        let foundTask = '';
        for (let i = 0; i < this.tasks.length; i++) {
            const task = this.tasks[i];
            if (task.id == taskId) {
                foundTask = task;
            }
        }
        return foundTask;
    }
    //step 9 part 2
    // deleteTask(taskId) {
    //     let newTasks = [];
    //     let task = currentTask;
    //     for (let i = 0; i < this.tasks.length; i++) {
    //         if (task.id !== taskId) {
    //             newTasks.push(task);
    //         }
    // this.tasks = newTasks;
    //     }
    //     return deleteTask;
    // }
}