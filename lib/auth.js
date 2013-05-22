//temporary, will be replaced with ldap specific stuff.
var Bcrypt = require('bcrypt');

exports.getBasic = function() {
    return {
		auth: { strategies: ['basic'] },
        handler: function(request) {
            request.reply('Success');
        }
    };
};
exports.getValidate = function() {
	return internals.validate;
};

var internals = {};

internals.validate = function (username, password, callback) {
	Bcrypt.compare(password, internals.passwords[username], function (err, isValid) {
		callback(null, isValid , internals.users[username]);
	});
};

internals.passwords = {
    john: '$2a$10$iqJSHD.BGr0E2IxQwYgJmeP3NvhPrXAeLSaGCj6IR/XU5QtjVu5Tm'            // password: secret
};

internals.users = {
    john: {
        user: 'john'
    }
};