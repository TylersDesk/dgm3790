//Create jquery object
var $theButtons = $('.video-info button');


$theButtons.on('click', function(e){
	//Discover which button was clicked.
	var videoGet = $(this).data("video"),
		videoID,
		colNum;

	switch (videoGet) {
	case "video1":
		videoID = 68215604;
		break;
	case "video2":
		videoID = 45624403;
		break;
	case "video3":
		videoID = 69217513;
		break;
	}

	//Whats the id?
	console.log(videoID);

	colNum = videoGet.replace("video", "");
	console.log(colNum);

	//AJAX THAT ID!
	ajaxVideoInfo(videoID, colNum);
});


//Functions

function ajaxVideoInfo(videoNum, colNum) {
	//Variaables
	var returnedstuff,
		url = "http://vimeo.com/api/v2/video/" + videoNum + ".json?callback=",
		jsonString;

	$.ajax(url, {
	  type: "GET",
	  dataType: "jsonp",
	  success: function(resp) {
	  	//Place quotes object into variable
	    returnedstuff = resp[0];
	    console.log(JSON.stringify(returnedstuff));

	    //animation stuff
	    loadingBar(colNum);

	    $('.jsondisplay').html(JSON.stringify(returnedstuff))
	    
	    //Place the qutes into the dom
	    domify(returnedstuff, colNum);
	  },
	  error: function(req, status, err) {
	    //console.error("Something went wrong! Status: %s (%s)", status, err);
	  }
	});
}

function domify(videoObj, colNum){
	var htmlString,
		keyString,
		$videoHolder = $('.video-info'),
		$keyDisplay = $('.keydisplay');
		
	//Show object in console
	console.dir(videoObj);

	//Build Makrup
	htmlString = '<div class="video-container">'
	htmlString += "<img class='img-circle' src=" + videoObj.thumbnail_medium + " />";
	htmlString += '<h5>' + videoObj.title + '</h5>';
	htmlString += '<p><small>' + videoObj.description + '</small></p>';
	htmlString += '<a href="' + videoObj.url + '" class="btn btn-default">Watch@Vimeo</a>';
	htmlString += '</div>';

	for (var key in videoObj) {
	  if (videoObj.hasOwnProperty(key)) {
	    keyString += "<strong>" +key + "</strong> -> " + videoObj[key] + "<br />";
	  }
	}

	$videoHolder.eq(colNum - 1).html(htmlString)
	$keyDisplay.html(keyString);
}


function loadingBar(col) {

	var $progressCont = $('.progress-container'),
		$videoHolder = $('.video-container'),
		progressBar = '<div class="progress progress-striped active"><div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div>';

	$progressCont .eq(col - 1).append(progressBar);

    //Set the progress bar to 0 -> show it and make it 100 -> hide it
    $('.progress-bar').css("width","0%").slideDown(200, function() {
    	$('.progress-bar').css("width","100%");
	    window.setTimeout(function() {
    		$progressCont.eq(col - 1).slideUp(100, function() {
    			$progressCont.eq(col - 1).parent().find('.video-container').slideDown(400);
    		});
    	}, 800)
    });
}