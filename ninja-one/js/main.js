//Create Tcode namespace
tcode = {};

var quotesObj;

$('.getquotes').on('click', function(){
	$.ajax("http://localhost:5984/quotes/a7b1223b55f3bc929be06343b100083a", {
	  type: "GET",
	  dataType: "jsonp",
	  success: function(resp) {
	  	//Place quotes object into variable
	    quotesObj = resp;
	    console.log(quotesObj);

	    //Place the qutes into the dom
	    domify(quotesObj);
	  },
	  error: function(req, status, err) {
	    console.error("Something went wrong! Status: %s (%s)", status, err);
	  }
	});
});

var domify = function(quotesObject) {
	var allquotes = quotesObject.quotes;
	console.log(allquotes);

	for (var q = 0; q < allquotes.length; q++){
		//Loop through and add each quote to the dom
		console.log(allquotes[q].quote);

		$('.quoteContainer').append('<div class="thequote">' + allquotes[q].quote + '</div>');
	}

	//Now Fire the Rotator
	rotateQuotes();
}

function rotateQuotes() {
	console.log('rotate the quotes')
}
