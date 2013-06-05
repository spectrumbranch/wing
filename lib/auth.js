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

internals.generateNewHash = function(input, callback) {
    var bcrypt = require('bcrypt');

    var start = Date.now();
    bcrypt.genSalt(10, function(err, salt) {
        console.log('salt: ' + salt);
        console.log('salt cb end: ' + (Date.now() - start) + 'ms');
        bcrypt.hash(input, salt, function(err, crypted) {
            console.log('crypted: ' + crypted);
            console.log('crypted cb end: ' + (Date.now() - start) + 'ms');
            console.log('rounds used from hash:', bcrypt.getRounds(crypted));
        
            var result = {
                salt: salt,
                hash: crypted
            };
        
            callback(null, result);
        });
    })
};

internals.compareHashToPlaintext = function(plaintext, hash, callback) {
    var bcrypt = require('bcrypt');
    
    bcrypt.compare(plaintext, hash, function(err, result) {
        if (err) {
            console.log("Error in auth.internals.compareHashToPlaintext(): " + err);
        }
        callback(err, result);
    });
}

exports.generateNewHash = internals.generateNewHash;
exports.compareHashToPlaintext = internals.compareHashToPlaintext;


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