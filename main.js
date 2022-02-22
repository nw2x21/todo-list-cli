const prompt = require('prompt-sync')();

//let input = Number(prompt('Enter your number: '));//

console.log("Welcome to the To-Do List Manager Application! ");
console.log(" ")
console.log("======================= ")


let input
let ToDos = []
let complete = []


while (input !== 3){
    
    console.log("There's nothing in your to-do-list")



    console.log(" ")
    //console.log(" ~select an option~ ")//
    console.log("[1] Create Your To-Do List Item")
    console.log("[2] Complete An Item on Your To-Do List ")
    console.log("[3] Exit Application ")
    
    
    input = Number(prompt('>'))
    if (input === 1 ){
        console.log("[1] What is this to-do item called ")

        let entry = (prompt(" "));
        ToDos.push(entry)
        complete.push("incomplete")
        
        console.log("===")

        for (let count = 0; count < ToDos.length; count++){
            console.log((count + 1) + ". " + complete[count] + " " + ToDos[count])
        }

    }
        


    
    
//let number2 = Number(prompt('Enter your second number: '));//
/* while num2 = Number('Complete an To-do item')
    console.log("Complete an To-do item"); */ 
}
