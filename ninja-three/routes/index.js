
/*
 * GET home page.
 */

request = require('request');

exports.index = function(req, res){
  res.render('index', { title: 'This is the Homepage.' });
};

/** serve jade enabled partials */
exports.partials = function(req, res) {
    res.render('partials/' + req.params.name);
};

exports.api = function(req, res, next) {
  //modify the url in any way you want
  var min = req.query.min;
  console.log(min);

  function buildQuery() {
  		var rString;

  	 	rString = 'http://www.asterank.com/api/asterank?query={"diameter":{"$gt":' + min + '}}&limit=50';

	 return rString
  }

  console.log('Building and running a query with Min: ' + min);
  //var newurl = 'http://www.asterank.com/api/asterank?query={"e":{"$lt":0.1},"i":{"$lt":4},"a":{"$lt":1.5}}&limit=10';
  var newurl = buildQuery() //'http://www.asterank.com/api/asterank?query={"diameter":{"$lt":' + max + ', "$gt":' + min + '}}&limit=20';
  console.log('API call query is: ' + newurl);
  request(newurl).pipe(res)
};

exports.redirect = function(req,res) {
	res.redirect('/');
}