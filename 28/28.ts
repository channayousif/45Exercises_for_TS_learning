/**
 * @date: 11-04-2024
 * @author: Channayousif
 * @exercise:28
 * @description: 
 * 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. 
 * Set a value for the variable age, and then:

• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder.

 */
import inquirer from "inquirer";
const  Age = await inquirer.prompt([{
    message: "Please Enter your age in years?",
    name:"age",
    type:"input",
    
}])

if (0<Age.age&&Age.age<2){
    console.log("You are a baby")
}else if(2<=Age.age&&Age.age<4){
    console.log("You are a Todler")
}else if(4<=Age.age&&Age.age<13){
    console.log("You are a kid")
}else if(13<=Age.age&&Age.age<20){
    console.log("You are a Teenage")
}else if(20<=Age.age&&Age.age<65){
    console.log("You are an Adult")
}else if(Age.age>=65){
    console.log("You are an Elder")
}else {
    console.log("Your input is invalid!")
}

