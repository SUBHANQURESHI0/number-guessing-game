#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";

let ranNum= Math.floor(Math.random()*7);
let inUser = await inquirer.prompt({
    name : "num1",
    type:"list",
    message:"Please Select a number",
    choices:["0","1","2","3","4","5","6"]
})

if (ranNum===parseInt(inUser.num1)){
    console.log(chalk.bold.bgGreenBright.greenBright("Congratulation you have won the game"));
}
else{
    console.log(chalk.bold.bgRedBright.redBright("Better luck next time"));
}