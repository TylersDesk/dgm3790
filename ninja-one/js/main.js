//Create Tcode namespace
tcode = {};

var quotesObj;

$('.getquotes').on('click', function(){
	$.ajax("http://blog.pirho.com:5984/quotes/0278c387a9147431df266d6d4d000c04", {
	  type: "GET",
	  dataType: "jsonp",
	  success: function(resp) {
	  	//Place quotes object into variable
	    quotesObj = resp;
	    //console.log(quotesObj);

	    //Init progress bar
	    loadingBar()
	    
	    //Place the qutes into the dom
	    domify(quotesObj);
	  },
	  error: function(req, status, err) {
	    //console.error("Something went wrong! Status: %s (%s)", status, err);
	  }
	});
});

/************************************
*
*	Event Listeners
*
************************************/

$('.quote-next').on('click', function() {
	window.mySwipe.next();
})

$('.quote-prev').on('click', function() {
	window.mySwipe.prev()
})



/************************************
*
*	Functions
*
*************************************/

var domify = function(quotesObject) {
	var allquotes = quotesObject.quotes;
	//console.log(allquotes);

	for (var q = 0; q < allquotes.length; q++){
		//Loop through and add each quote to the dom
		//console.log(allquotes[q].quote);

		$('.swipe-wrap').append('<div class="thequote">' + allquotes[q].quote + '</div>');
	}

	//Now Fire the Rotator
	
}

function rotateQuotes() {
	//console.log('rotate the quotes')
	window.mySwipe = Swipe(document.getElementById('mySwipe'));
	window.setTimeout( function() {
		$('.swipe-wrap').slideDown(300);
	}, 300)
}

function loadingBar() {
    //Set the progress bar to 0 -> show it and make it 100 -> hide it
    $('.progress-bar').css("width","0%").parent().slideDown(200, function() {
    	$('.progress-bar').css("width","100%");
	    window.setTimeout(function() {
    		$('.landing').slideUp(400, function() {
    			$('.quote-wrapper').fadeIn(function() {
    				rotateQuotes();
    			});
    		});
    	}, 800)
    });
}

window.loc