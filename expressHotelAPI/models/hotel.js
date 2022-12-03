const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db.config')

class Hotel extends Model { }

Hotel.init({
    kode_hotel: {
        type: DataTypes.INTEGER,
        unique: true
    },
    nama_hotel: {
        type: DataTypes.STRING
    },
    harga_hotel: {
        type: DataTypes.INTEGER
    },
    alamat_hotel: {
        type: DataTypes.STRING
    },
    kota_hotel: {
        type: DataTypes.STRING
    },
    tentang_hotel: {
        type: DataTypes.STRING
    },
    rating_hotel: {
        type: DataTypes.INTEGER
    },
    poto_hotel: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'Hotel'
})

module.exports = Hotel