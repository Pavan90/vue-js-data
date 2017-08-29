var fs = require('fs');
var csv = require('fast-csv');
var iplData;


fs.createReadStream('./excel-files/matches.csv')
	.pipe(csv())
	.on('data',function(data){
		iplData= data
		console.log(iplData);
	})
	.on('end',function(data){
		console.log('read finished')
	});