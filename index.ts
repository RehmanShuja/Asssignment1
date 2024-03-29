#! /usr/bin/env node

import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
    name: "firstnumber",
    message: "enter your first number",
    type: "number"
    },
    {
    name: "secondnumber",
    message: "enter your second number",
    type:"number"
    },
    {
    name:"operator",
    message:"select one of the operator",
    type:"list",
    choices:["Addition", "Subtraction", "multiplication", "division"]
    },
])
console.log(answer)

//operator//
if(answer.operator==="Addition")
console.log(answer.firstnumber + answer.secondnumber)
else if(answer.operator==="Subtraction")
console.log(answer.firstnumber - answer.secondnumber)
else if(answer.operator==="multiplication")
console.log(answer.firstnumber * answer.secondnumber)
else if(answer.operator==="division")
console.log(answer.firstnumber / answer.secondnumber)
else console.log("program to warr gya")
