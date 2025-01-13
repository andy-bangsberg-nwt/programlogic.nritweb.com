"use strict";
//I use jQuery for the slicknav menu which interferes with using a docId
//in regular JS. To save time, instead of changing this to jQuery
//I changed the docId to be docId.
var docId = function(id) { return document.getElementById(id); };


var processEntries = function(event){
	 
	 
	if((docId("sk01").checked) 
		 && (docId("sk02").checked == false)
		 && (docId("sk03").checked == false)
		 && (docId("sk04").checked)
		 && (docId("sk05").checked)
		 && (docId("sk06").checked == false)
		 && (docId("sk07").checked == false)
		 && (docId("sk08").checked)
		 && (docId("sk09").checked)
		 && (docId("sk10").checked == false)){
			docId("answer").innerHTML = "Correct! Nice work on Standards and Keywords!"; 
			
	}
	else{
		docId("answer").innerHTML = "Not quite, try again";
	}
	
	
}; //end processEntries

var resetForm = function(){

	docId("answer").innerHTML = "";
	// docId("var_answer").innerHTML = "";
	//resets all the radio buttons to checked = false
	const rbs = document.querySelectorAll('input[type="radio"]');
	for (const rb of rbs) {
		if (rb != null) {
			rb.checked = false;
		}
	}
	//resets all the checkboxes to checked = false
	/* const all_cbx = document.querySelectorAll('input[type="checkbox"]');
	for(const cb of all_cbx){
		if(cb != null){
			cb.checked = false;	
		}
	
	} */
	/* document.querySelector("input[name='witc']:checked").checked = false;
	document.querySelector("input[name='camel']:checked").checked = false;
	document.querySelector("input[name='sensitive']:checked").checked = false;
	document.querySelector("input[name='naming']:checked").checked = false; */
}

window.onload = function() {
	resetForm();
    docId("buttonSubmit").onclick = processEntries;
	docId("buttonReset").onclick = resetForm;
};