//function printStudents(){      
//  for(var i = 0; i < students.length; i++){
//    var item;
//    var outputDiv = document.getElementById('output');
//    
//    for(var property in students[i]){
//      item += "<p><b>" + property + ":</b> " + students[i][property] + "</p>"
//    }
//    outputDiv.innerHTML = item + "<br><hr>"; 
//    item = "";
//  }
//}
//
//printStudents();



function printInfo(message){
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message; 
}


function printAllStudentInfo(){
    var message = "";
    for(var i = 0; i < students.length; i++){
        for(var prop in students[i]){
             message += "<p><b>" + prop + ":</b> " + students[i].prop + "</p>"
        }
        printInfo(message);
    }   
}

function search(studentName){   
    var isFound = false;
    var message = "";
    for(var i = 0; i < students.length; i++){
        console.log("Comapring: " + studentName.toLowerCase() + " to " + students[i]["name"].toLowerCase());
        if(studentName.toLowerCase() === students[i]["name"].toLowerCase()){
            console.log(studentName + " Found in index " + i);
            for(var prop in students[i]){
                message += "<p><b>" + prop + ":</b> " + students[i][prop] + "</p>"
            }            
            isFound = true;
            console.log(message);
            printInfo(message);
            break;
        }
    }
    
    if(!isFound){
        console.log(studentName + " is not Found!");
        printInfo("The student name was not found in the directory");
    }
}

function searchStudent(){
    var isValid = false;   
    do{     
        var answer = prompt("Enter a student name to view his/her records");   
        console.log("Input: " + answer);
        if(answer === null){
            console.log("input was null");
            alert("You did not enter anything! Please try again ");   
         
        }else if(answer === "quit"){
            console.log("input was quit");
            printInfo("You Decided to Quit. Refresh the page to try again");
           
        }else{
            answer = answer.replace(/\s/g, '');
            if(answer.length == 0){
                 console.log("input was blank");
                 alert("You did not enter anything! Please try again ");    
            }else{
                answer = answer.toLowerCase();  
                console.log("Comencing Search for " + answer);
                search(answer);
                isValid = true;  
                alert("Search Complete!");
            }      
        }
        
    }while(!isValid);  
    
}

//function searchStudent(){
//    var isValid = false;   
//    do{
//        var answer = prompt("Enter a student name to view his/her records");   
//        console.log("Input: " + answer);
//        answer = answer.replace(/\s/g, '');;
//        if(answer.length != 0){         
//            answer = answer.toLowerCase();  
//            if(answer != "quit"){             
//                console.log("Comencing Search for " + answer);
//                search(answer);
//                console.log("Search Complete");
//                isValid = true;  
//                alert("Search Complete!");
//            }else{  
//            printInfo("You Decided to Quit. Refresh the page to try again");
//                isValid = true;  
//            }
//                     
//        }else{
//            alert("You did not enter anything! Please try again ");
//        }        
//    }while(!isValid)  
//    
//}

searchStudent();