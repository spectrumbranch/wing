var auth = require('./lib/auth');
var Hapi = require('hapi'),
	options = {
		/*replace this with ldap change*/
		auth: {
			'basic': {
				scheme: 'basic',
				validateFunc: auth.getValidate()
			}
		},
		cors: true
		//TODO: ,tls:
	},
	server = new Hapi.Server("0.0.0.0", 8765, options);

server.views({
    engines: {
        html: 'handlebars'            
    },
    path: __dirname + '/views'
});

server.route([
	{ method: 'GET', path: '/basic', config: auth.getBasic() }
]);

server.start(function() {
	console.log("Server up");
});