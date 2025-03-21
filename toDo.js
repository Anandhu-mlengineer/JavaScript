let tasknum;
const readline = require("readline");
rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
let task = [];
function ShowMenu(){
    console.log("\n 1. Add task");
    console.log("2. View task");
    console.log("3. Delete task");
    console.log("4.exit task");
    rl.question("Enter a choice: ",handlechoice);

}
   
function handlechoice(choice){
    switch(choice){
        case "1":
            addTask();
            break;
        case "2":
            viewTask();
            break;
        case "3":
            deleteTask();
            break;
        case "4":
            console.log("we are exiting");
            rl.close();
            break;
        default:
            console.log("Invalid responce");
           

              
    }
}
function addTask(){
    rl.question("Please enter your task here:",function(toDo) {
        toDo = String(toDo);
        task.push(toDo);
        console.log("your task successfully added");
        ShowMenu();
    
});
    
    
}
function viewTask(){
    for (let item in task) {
        console.log(`your tasks are Your task ${Number(item) + 1}: ${task[item]}`);
        
    }
    ShowMenu();
}
function deleteTask(){
    rl.question("Enter the task number to remove",tasknum);
    
    task = task.pop(tasknum-1);
    console.log("The task removed sucessfully");

}
ShowMenu();
