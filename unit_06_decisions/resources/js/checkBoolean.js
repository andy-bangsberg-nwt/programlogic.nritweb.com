
//I use jQuery for the slicknav menu which interferes with using a docId
//in regular JS. To save time, instead of changing this to jQuery
//I changed the docId to be docId.
const docId = (selector) => {
    return document.querySelector(selector);
};

//this file is used in simpleIfElse.html
//updated May 2022. Use more modern syntax
const processForm = ()=> {
	//global variable
    trueCount = 0;
    falseCount = 0;
    docId("#answer").textContent = "";
	    let checkedboxes = document.querySelectorAll('input[type=checkbox]:checked');
     
    if(checkedboxes.length > 0){
        checkedboxes.forEach(checkIfValid);
        if(trueCount == 3 && falseCount == 0){
            docId("#answer").textContent = "Nice job! You correctly choose all the boolean expression";  
        }
        else if(trueCount == 2 && falseCount == 0){
            docId("#answer").textContent = "Almost, check the options and look for relational operators";
        }
        else if(trueCount == 2 && falseCount == 1){
            docId("#answer").textContent = "Almost, do all your selections contain a relational operator?";
        }
        else{
            docId("#answer").textContent = "Keep trying, you'll get it."
        }
    }
    else{
        docId("#answer").textContent = "Please select at least one option."
    } 
}//end processForm

let trueCount = 0;
let falseCount = 0;

const checkIfValid = (checkbox) =>{

    if(checkbox.className === "yes"){
        trueCount +=1;
    }
    else{
        falseCount +=1;
    }
   
}	

	

const resetForm = ()=>{
	
	let checkboxes = document.querySelectorAll('input[type=checkbox]');
    docId("#answer").textContent = "";
    //this is like a stream in Java
    checkboxes.forEach(element => element.checked = false);
    trueCount = 0;
};
document.addEventListener("DOMContentLoaded", () => {
	resetForm();
    docId("#buttonSubmit").addEventListener("click", processForm);
    docId("#buttonReset").addEventListener("click", resetForm);
   
});
