const prompt = require('prompt-sync')();

//let input = Number(prompt('Enter your number: '));//

console.log("Welcome to the To-Do List Manager Application! ");
console.log(" ")
console.log("======================= ")

console.log("There's nothing in your to-do-list")

let input
let ToDos = []
let complete = []


while (input !== 3){
    

    console.log(" ")

    
    console.log("[1] Create Your To-Do List Item")
    console.log("[2] Complete An Item on Your To-Do List ")
    console.log("[3] Exit Application ")
    
    
    console.log(" ~select an option~ ")

    input = Number(prompt('>'))


    if (input === 1 ){
        console.log(" ~ Adding an item to your to do list ~ ")
       console.log(" [1] What is the to do item you wish to add");

       let entry = (prompt(" "));        
        ToDos.push(entry)
        complete.push("incomplete")        
        console.log("===")
        for (let count = 0; count < ToDos.length; count++){    
        console.log((count + 1) + ". " + complete[count] + " " + ToDos[count])
    }

    }    

     else if(input === 2){
        console.log(" ~Completing a to do list item ~ ")
        console.log(" [2] Which item do you want to complete? Select a number: ");
        let whichItem = Number(prompt("> "))
        complete[whichItem - 1 ] = "Completed"
        for (let count = 0; count < ToDos.length; count++){    
            console.log((count + 1) + ". " + complete[count] + " " + ToDos[count])
        }

    }

}
    
                   
        
       
    


   

        

   
    
