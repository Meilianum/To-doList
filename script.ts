import inquirer from "inquirer"

let todos = []
let condition = true;

  while(condition)
 { 
    let todosMission =await  inquirer.prompt(
    [
   {
    name : "firstMission",
    type : "input",
    message : "what wouuld you like to  add in your todos?"

    },
   {
    name : " secondMission",
    type :  "confirm",
    message : " would you like to  add in your todos?",
    default : "true",
   },
]
);
todos.push(todosMission.firstMission);
console.log(todos)
condition =todosMission.secondMission
}