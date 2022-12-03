const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db.config')

class User extends Model { }

User.init({
    no_ktp: {
        type: DataTypes.INTEGER,
        unique: true
    },
    nama_depan: {
        type: DataTypes.STRING
    },
    nama_belakang: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    jenis_kelamin: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    poto: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'Users'
})

module.exports = User