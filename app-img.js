var request   = require('request'),
	cheerio  = require('cheerio'),
	fs 		 = require('fs');
	

	
request({url: 'http://thehackernews.com/', encoding: 'binary'}, function(err, resp, body){
	if(!err && resp.statusCode == 200){
		var $ = cheerio.load(body);
		var i = 0;
		$('.blog-posts .hnews').each(function(){
			var titulo = $(this).find('h2 a').html();
			var imagen = $(this).find('img').attr('src');

			var file = fs.createWriteStream('img/'+i+'.jpg');
			request(imagen).pipe(file);
			i = i+1;
		});		
	}
});