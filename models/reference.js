
// Creating our User model
module.exports = function (sequelize, DataTypes) {
    var Reference = sequelize.define("references", {
        // The email cannot be null, and must be a proper email before creation
        gameID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        // The password cannot be null
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        completion: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    Reference.associate = function (models) {

        Reference.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })

    }

    return Reference;
};
