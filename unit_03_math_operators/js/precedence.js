"use strict";

//I use jQuery for the slicknav menu which interferes with using a docId
//in regular JS. To save time, instead of changing this to jQuery
//I changed the docId to be docId.
var docId = function(id) { return document.getElementById(id); };

var processEntries = function(){

	if(docId("op01").value == 14
		&& (docId("op02").value == 23)
		&& (docId("op03").value == 6.0)){
			
		docId("answer").innerHTML = "Correct! Nice work on Operator precedence!"; 
	}
	else{
		docId("answer").innerHTML = "Not quite, try again.";
	}

}

var resetForm = function(){

	docId("answer").innerHTML = "";
	//resets all the textboxes empty string
	const all_tbx = document.querySelectorAll('input[type="text"]');
	for(const tbx of all_tbx){
			tbx.value = "";	
	}

}

window.onload = function() {
	resetForm();
    docId("buttonSubmit").onclick = processEntries;
	docId("buttonReset").onclick = resetForm;
};