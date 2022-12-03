const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db.config');
const hotel = require('./hotel');
const user = require('./users');

class Pemesanan extends Model { }

Pemesanan.init({
    kode_pemesanan: {
        type: DataTypes.STRING
    },
    id_user: {
        type: DataTypes.INTEGER
    },
    id_hotel: {
        type: DataTypes.INTEGER
    },
    kamar: {
        type: DataTypes.INTEGER
    },
    hari: {
        type: DataTypes.INTEGER
    },
    orang: {
        type: DataTypes.INTEGER
    },
    checkin: {
        type: DataTypes.DATEONLY
    },
    total_bayar: {
        type: DataTypes.DECIMAL
    },
    status: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'Pemesanan'
});

Pemesanan.hasOne(hotel, {foreignKey: 'id_hotel'});
Pemesanan.belongsTo(hotel, {foreignKey: 'id_hotel'});

Pemesanan.hasOne(user, {foreignKey: 'id_user'});
Pemesanan.belongsTo(user, {foreignKey: 'id_user'});

module.exports = Pemesanan