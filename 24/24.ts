/**
 *  @date: 11-04-2024
 * @author: Channayousif
 * @exercise:24
 * @description: 
 * More Conditional Tests:
 *  You don’t have to limit the number of tests you create to 10. 
 * If you want to try more comparisons, write more tests.
 *  Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array

 * 
 *  
 */
const rivers = [
    "Indus", 
    "Jhelum",
    "Chenab",
    "Ravi",
    "Sutlej",
    "Kabul"]
    let countries = [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Australia",
        "Austria",
        "Austrian Empire",
        "Azerbaijan"
        ]
//Tests for equality and inequality with strings
console.log("\nTests for equality and inequality with strings\n");
    console.log("Test is countries[1]=='Albania' // I predict it to be 'true'")
    console.log(countries[1]=="Albania")

    console.log("Test is countries[1]=='Albaniaa' // I predict it to be 'false'")
    console.log(countries[1]=="Albaniaa")
//Tests using the lower case function
console.log("\nTests using the lower case function\n");
console.log("Test is countries[1].toLowerCase()=='Albania' // I predict it to be 'false'")
    console.log(countries[1].toLowerCase()=="Albania")

    console.log("Test is countries[1].toLowerCase()=='albania' // I predict it to be 'true'")
    console.log(countries[1].toLowerCase()=="albania")

//Numerical tests involving equality and inequality, 
console.log("\nNumerical tests involving equality and inequality\n");
    console.log("Test is 100!=100 // I predict it to be 'false'")
    console.log(100!=100)

    console.log("Test is countries[1]!='albania' // I predict it to be 'true'")
    console.log(100 != rivers.indexOf("Indus"))
    //greater than and less than, 
    console.log("Numerical tests involving greater than and less than");
    console.log("Test is 456 > 956 // I predict it to be 'false'")
    console.log(456 > 956)

    console.log("Test is 456 < 956 // I predict it to be 'true'")
    console.log(456 < 956)
    //greater than or equal to, 
    console.log("Numerical tests involving greater than or equal to");
    console.log("Test is 190>=168 // I predict it to be 'true'")
    console.log(190>=168)

    console.log("Test is 190>=1680 // I predict it to be 'false'")
    console.log(190>=1680)
    //and less than or equal to
    console.log("Numerical tests involving less than or equal to");
    console.log("Test is 2445<=355768 // I predict it to be 'true'")
    console.log(2445<=355768)

    console.log("Test is 90<=10 // I predict it to be 'false'")
    console.log(90<=10)
    console.log("-----------------------------------------------------------")
//Tests using "and" and "or" operators
console.log("Numerical tests involving 'and' and 'or' operators");
console.log("Test is countries[1]=='Albania' && 10>9 // I predict it to be 'true'")
    console.log(countries[1]=="Albania" && 10>9)

    console.log("Test is countries[1]=='Albania' || 10>100 // I predict it to be 'true'")
    console.log(countries[1]=="Albania" || 10>100)
    console.log("-----------------------------------------------------------")
//Test whether an item is in an array
console.log("Test whether an item is in an array");
console.log("Test is rivers.includes('Indus') // I predict it to be 'true'")
    console.log(rivers.includes("Indus"))

    console.log("Test is rivers.includes('Indusss') // I predict it to be 'false'")
    console.log(rivers.includes("Indusss"))
    console.log("-----------------------------------------------------------")
//Test whether an item is not in a array
console.log("Test whether an item is not in a array");
console.log("Test is !rivers.includes('Indus') // I predict it to be 'false'")
    console.log(!rivers.includes("Indus"))

    console.log("Test is !rivers.includes('Indusss') // I predict it to be 'true'")
    console.log(!rivers.includes("Indusss"))
    console.log("-----------------------------------------------------------")
