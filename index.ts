#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "enter the first number", type: "number", name: "firstnumber" },
  { message: "enter the second number", type: "number", name: "secondnumber" },
  {
    message: "select one of the operator to perform action",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "multiplication", "division"],
  },
]);

if (answer.operator === "addition")
 {
console.log(answer.firstnumber +answer.secondnumber );
}

else if (answer.operator === "subtraction")
 {
console.log(answer.firstnumber - answer.secondnumber );
}

else if (answer.operator === "multiplication")
 {
console.log(answer.firstnumber * answer.secondnumber );
}

else
 {
console.log(answer.firstnumber / answer.secondnumber );
}