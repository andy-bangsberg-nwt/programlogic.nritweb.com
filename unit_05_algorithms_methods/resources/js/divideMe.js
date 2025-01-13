"use strict";

/* used in void_methods.html */
$(document).ready( () => {
	/* un-checking works in chrome but not Firefox */
	$("#divideMe_form input[type='radio']").each(() => {
			if($(this).prop('checked', true)){
				$(this).prop('checked', false);
			}
	});
	
	$("#buttonSubmit").click(evt => {
		
		$("#answer").text("");

		if(($("#3").is(":checked"))) {
				$("#answer").text("Correct! Nice work!");		
		}
		else if(($("#4").is(":checked"))){
			
			$("#answer").text("Not for the problem statement.");
		}
		else{
			$("#answer").text("Remember, divide and conquer");
		}	
		
	});
	

	
	
});  //end ready
