const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
const bcrypt = require('bcrypt');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compare(loginPw, this.password);
  }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
        username: {
          type: DataTypes.STRING(20),
          allowNull: false
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true
          }
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [4]
          }
        }
    },
    {
        hooks: {
          // set up beforeCreate lifecycle "hook" functionality
          async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
          },

          async beforeUpdate(updatedUserData) {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
          },

          async beforeBulkCreate(newUserData) {
            newUserData = newUserData.map(user => {
              return user.dataValues;
            })

            newUserData = newUserData.map(async user => {
              await bcrypt.hash(user.password, 10).then(userPassword => {
                user.password = userPassword;
                return user;
              })
            })
            console.log(newUserData);
            
            return newUserData;
          }
        },
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
)

module.exports = User;