const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('hotel_api', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize