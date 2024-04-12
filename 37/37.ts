/**
 * @date: 12-04-2024
 * @author: Channayousif
 * @exercise:37
 * @description: 
 * 37. Large Shirts: Modify the make_shirt() function so that shirts are large
by default with a message that reads I love TypeScript. Make a large shirt and a
medium shirt with the default message, and a shirt of any size with a different
message.
* 

 */
function make_shirt(text:string = "Welcome to TS",size:string ="Large"){
    console.log(`your t-shirt is ${size} and "${text}" is printed on it`)
}
make_shirt();