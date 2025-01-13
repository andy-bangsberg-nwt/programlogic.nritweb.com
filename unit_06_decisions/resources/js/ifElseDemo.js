function demoCode(){


	var user = document.getElementById("userInput").value;
	var outputPre = document.getElementById("ifElseOutput");
	var choice = user.toUpperCase();

	if (choice === "A") {
	  outputPre.innerHTML = "The choice was A";
	}
	else if (choice === "B") {
		outputPre.innerHTML = "The choice was B";
	}
	else {
		outputPre.innerHTML = "Your input does not compare with my known values.";
	}

}

function resetDemo(){

	var user = document.getElementById("userInput");
	user.value = "";
	var output = document.getElementById("ifElseOutput");
	output.innerHTML = "";
}


function nestedDemoCode(){

	var city = document.getElementById("city");
	var county = document.getElementById("county");
	var state = document.getElementById("state");
	var outputPre = document.getElementById("nestedOutput");

	var stateChoice;
	var cityChoice;
	var countyChoice;
    var defaultState = "WI";

    var pattern; //reused to hold currect regExp value

	stateChoice = prompt("What State do you live in?");
    pattern = new RegExp(defaultState, "i"); //"i" means ignore case

	if (pattern.test(stateChoice)) {
	    //state.value = stateChoice.toUpperCase();

		countyChoice = prompt("What county do you live in?");
        pattern = new RegExp("Dane", "i");

		if (pattern.test(countyChoice)) {
		    //county.value = countyChoice.toUpperCase();

			cityChoice = prompt("What city in Dane county do you live in?");
            pattern = new RegExp("Madison", "i");

			if (pattern.test(cityChoice)) {
			  //  city.value = cityChoice.toUpperCase();
				outputPre.innerHTML = "Madison is a big city";
			}
			else {
				outputPre.innerHTML = "There are other cities in Dane County?";
			}
		}
		else {
			cityChoice = prompt("What city do you live in?");
			pattern = new RegExp("Milwaukee", "i");

			if (pattern.test(cityChoice)) {
				outputPre.innerHTML = "That's too big for me.";
			}
			else {
				outputPre.innerHTML = "I like " + cityChoice.toUpperCase();
			}
		}
		state.value = stateChoice.toUpperCase();
		county.value = countyChoice.toUpperCase();
		city.value = cityChoice.toUpperCase();
	}
	else {
			outputPre.innerHTML = "Oh, you are not from WI, Goodbye";
	}
}

function resetNestedDemo(){

	document.getElementById("city").value = "";
	document.getElementById("county").value = "";
	document.getElementById("state").value = "";

	document.getElementById("nestedOutput").innerHTML = "";
}
