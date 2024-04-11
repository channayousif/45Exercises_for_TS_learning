/**
 * @date: 12-04-2024
 * @author: Channayousif
 * @exercise:32
 * @description: 
 * 32. Checking Usernames: Do the following to create a program that simulates how websites 
 * ensure that everyone has a unique username.

• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new 
usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. 
If it has, print a message that the person will need to enter a
new username. If a username has not been used, print a message saying that the username
 is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should 
not be accepted.

 */
const current_users = [
    "Admin",
    "Apricot",
    "Banana",
    "Blackberry",
    "Blueberry",
    "Currants",
    "Dates",
    "Figs",
    "Gooseberry",
  ];
  import inquirer from "inquirer";
 
  let x=1;
  while(x>0){
    const username= await inquirer.prompt([{
        message:"Enter username (enter Q to quit):",
        name:"new_user",
        type:"input"
      }])
      
      if (current_users.includes(username["new_user"]) ) {
        console.log("We alredy have this user, please select another username!");
        inquirer.Separator
        continue;
        }else if(username["new_user"].toLowerCase()=="q"){
            break;
        }
        else {
          console.log("your username has been created!");
          current_users.push(username["new_user"]);
      }
  }
