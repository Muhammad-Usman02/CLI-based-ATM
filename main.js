#!/user/bin/env node

import inquirer from "inquirer";
async function atmOperations() {
    let myBalance = 20000; // Dollars
    let pinCode = 1234;
    let pinAnswer = await inquirer.prompt([
        {
            name: "pin",
            message: "Please Enter Your Pin",
            type: "number",
        },
    ]);
    if (pinAnswer.pin === pinCode) {
        console.log("Correct pin code!");
        let operationAnswer = await inquirer.prompt([
            {
                name: "operation",
                message: "Please Select an Option",
                type: "list",
                choices: ["Withdraw", "Check Balance", "Fast Cash"],
            },
        ]);
        if (operationAnswer.operation === "Withdraw") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    message: "Please enter the amount to withdraw",
                    type: "number",
                },
            ]);
            if (amountAns.amount <= myBalance) {
                myBalance -= amountAns.amount;
                console.log(`Your remaining balance is: $${myBalance}`);
            }
            else {
                console.log("You have insufficient balance.");
            }
        }
        else if (operationAnswer.operation === "Fast Cash") {
            let fastCashAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "list",
                    choices: ["1000", "3000", "5000", "10000", "15000"],
                },
            ]);
            let fastCashAmount = parseInt(fastCashAns.amount);
            if (fastCashAmount <= myBalance) {
                myBalance -= fastCashAmount;
                console.log(`The remaining balance is: $${myBalance}`);
            }
            else {
                console.log("You have insufficient balance.");
            }
        }
        else if (operationAnswer.operation === "Check Balance") {
            console.log(`Your balance is: $${myBalance}`);
        }
    }
    else {
        console.log("Incorrect pin code. Please enter the correct pin code.");
    }
}
atmOperations();
