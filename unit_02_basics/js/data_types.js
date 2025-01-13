"use strict";
//I use jQuery for the slicknav menu which interferes with using a docId
//in regular JS. To save time, instead of changing this to jQuery
//I changed the docId to be docId.
var docId = function(id) { return document.getElementById(id); };


var processEntries = function(event){
	 
	if((docId("var01").checked) 
		 && (docId("var02").checked == false)
		 && (docId("var03").checked)
		 && (docId("var04").checked == false)
		 && (docId("var05").checked)
		 && (docId("var06").checked == false)
		 && (docId("var07").checked)
		 && (docId("var08").checked == false)
		 && (document.querySelector('input[name="kw_if"]').checked)
		 && (document.querySelector('input[name="kw_while"]').checked)
		 && (document.querySelector("input[name='kw_standards']").checked == false)
		 && (document.querySelector("input[name='kw_final']").checked)
		 && (document.querySelector("input[name='kw_quit']").checked == false)
		 && (document.querySelector("input[name='kw_constant']").checked == false)
		 && (document.querySelector("input[name='kw_main']").checked)
		 && (document.querySelector("input[name='kw_else']").checked)
		 ){
		
			
		docId("answer").innerHTML = "Correct! Nice work on Variables, Data Types, and Keywords!"; 
			
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
	const all_cbx = document.querySelectorAll('input[type="checkbox"]');
	for(const cb of all_cbx){
		if(cb != null){
			cb.checked = false;	
		}
	
	}
	/* This is setting to false??
	document.querySelector("input[name='witc']:checked").checked = false;
	document.querySelector("input[name='camel']:checked").checked = false;
	document.querySelector("input[name='sensitive']:checked").checked = false;
	document.querySelector("input[name='naming']:checked").checked = false; */
}

window.onload = function() {
	resetForm();
    docId("buttonSubmit").onclick = processEntries;
	docId("buttonReset").onclick = resetForm;
};