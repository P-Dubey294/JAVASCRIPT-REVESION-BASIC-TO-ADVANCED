let todo = [] // todo array create 

let req = prompt ( " Please Enter your Request ") // request for what i am adding the task ? 

console.log(req);

while(true){
    if(req =="quit"){
        console.log("Quit app");
        break;
    }
    //1> todo list condition 
    if(req =="list"){
        console.log("=============");
        for(i=0; i<todo.length; i++){ // with the help of for loop index will help for deleted the task 
            console.log(i, todo[i]);
        }
        console.log("----------");
        //2> adding the todo task conditons .....
    }else if (req == "add"){
        let task = prompt("please  enter the tsk you want to add")
        todo.push(task) // add task 
        console.log("task added Sucessfully !");
        //3> delete condition
    } else if (req == "delete"){
        let idx = prompt(" please enter the task index");
        todo.splice(idx , 1); // with the help of slice method i will go for those index i want to be a delete task.
        console.log("task deleted Sucessfully !");
    } else {
        console.log(" Invalid Request please enter only list , add, delete, quit");
    }

    req = prompt ( " Please Enter your Request ") // when user add the task then what will be the next request ?

}  