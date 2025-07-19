const readline = require("node:readline");

//for getting input form the cli
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// for storing Task
const Task = [];
function ShowMenu() {
  console.clear();
  console.log(
    "1: Add Task\n2: Delete Task\n3: Complete Task\n4: Show Tasks\n5: Exit"
  );
  rl.question("Enter Your Choice : ", (choice) => {
    if (parseInt(choice) === 1) {
      AddTask();
    } else if (parseInt(choice) === 2) {
      DeleteTask();
    } else if (parseInt(choice) === 3) {
      CompleteTask();
    } else if (parseInt(choice) === 4) {
      console.log(ShowTask());
      console.log("\n Wait for 5 seconds...");

      setTimeout(() => ShowMenu(), 5000);
    } else if (parseInt(choice) === 5) {
      console.clear();
      console.log("\n\n\t\t\t\t\t\tBye Bye :) ");
      rl.close();
    } else {
      console.log("Invalid Input (Please choose from abouve ^ : )");

      ShowMenu();
    }
  });
}

let IdCount = 1;

function AddTask() {
  rl.question("Enter title for your task: ", (title) => {
    rl.question("Enter description for your task: ", (desc) => {
      const newTask = {
        id: IdCount++,
        Title: title,
        Description: desc,
        Status: false,
      };
      Task.push(newTask);
      console.log("\nTask Added");
      console.log("\n Wait for 5 seconds...");

      setTimeout(() => ShowMenu(), 5000);
    });
  });
}

function ShowTask() {
  console.log("\t+---ID---+\n");

  if (Task.length === 0) {
    return "\nNo Task Found!\n";
  }
  let TaskList = "";
  Task.forEach((e) => {
    TaskList += `\t|   ${e.id}   |     \t${e.Title}  \t\t${e.Description}   \t\t\t${e.Status}\n\t------\n`;
  });
  return TaskList;
}

function DeleteTask() {
  const TasksList = ShowTask();
  console.log(TasksList);
  if (TasksList == "\nNo Task Found!\n") {
    console.log("\n Wait for 5 seconds...");

    setTimeout(() => ShowMenu(), 5000);
  }

  rl.question("Enter the Id of the task you want to delete : ", (id) => {
    Task.pop(parseInt(id) - 1);
    console.log(`\nTask ${id} is Deleted.\n`);
    console.log("\n Wait for 5 seconds...");

    setTimeout(() => ShowMenu(), 5000);
  });
}
function CompleteTask() {
  const TasksList = ShowTask();
  console.log(TasksList);
  if (TasksList == "No Task Found!") {
    console.log("\n Wait for 5 seconds...");

    setTimeout(() => ShowMenu(), 5000);
  }

  rl.question(
    "Enter the Id of the task you want to marked Completed : ",
    (id) => {
      Task[parseInt(id) - 1].Status = true;

      console.log(`\nTask ${id} is Completed.\n`);
      console.log("\n Wait for 5 seconds...");

      setTimeout(() => ShowMenu(), 5000);
    }
  );
}

ShowMenu();
