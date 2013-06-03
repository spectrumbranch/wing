module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        userid: {
			type: DataTypes.STRING(30),
			validate: {
				isAlphanumeric: true
			}
		},
		email: {
			type: DataTypes.STRING(50),
			validate: {
				isEmail: true
			}
		},
		salt: {
			type: DataTypes.STRING(17)
		},
		hash: {
			type: DataTypes.STRING(60)
		}
    }, {
        freezeTableName: true
    });

    return User;
};