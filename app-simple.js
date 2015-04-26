var request = require('request'),
    cheerio = require('cheerio');

	request({url: 'http://thehackernews.com/', encoding: 'binary'}, function(err, resp, body){
		if(!err && resp.statusCode == 200){
			var $ = cheerio.load(body);
			$('.blog-posts .hnews h2 a').each(function(){
				var titulo = $(this).html();
				console.log(titulo);
			});

		}
	});


	// Este es un ejemplo simple, sirve para jalar del blog(url) los títulos que se
	// encuentran en un <a> dentro de un <h2> dentro de un contenedor con clase .hnews dentro
	// de otro con clase .blog-post.
	// Ejecutar npm install request y npm install cheerio
	// Ejecutar en consola: node app-simple

	// ****	ESTE EJEMPLO ESTÁ BASADO DEL SIGUIENTE TUTORIAL   
	// https://www.youtube.com/watch?v=Spjt66m3RtA  ****