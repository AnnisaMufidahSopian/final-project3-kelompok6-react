const express = require('express')
const router = express.Router()
const PemesananModel = require('../models/pemesanan')
const Hotel = require('../models/hotel')
const User = require('../models/users')
// routing endpoint users utama
router.get('/', async(req, res) => {
    const Pemesanan = await PemesananModel.findAll({
      include:[
        {model: Hotel},
        {model: User}
      ]
    })
    const filters = req.query;
    const filteredPemesanan = Pemesanan.filter(pesanan => {
    let isValid = true;
    for (key in filters) {
      console.log(key, pesanan[key], filters[key]);
      isValid = isValid && pesanan[key] == filters[key];
    }
    return isValid;
  });
    res.status(200).json({
        data: filteredPemesanan,
        metadata: "test Pemesanan end point success"
    })
})

router.post('/', async(req, res) => {
    // nip, nama, password ->>>>>>>>>>>>>>>>> BE nangkep
    const { kode_pemesanan, id_user, id_hotel, kamar, hari, orang, checkin, total_bayar, status	 } = req.body
    // meng  create data
    const Pemesanan = await PemesananModel.create({
        kode_pemesanan, id_user, id_hotel, kamar, hari, orang, checkin, total_bayar, status
    })
    res.status(200).json({
        registered: Pemesanan,
        metadata: "test add pemesanan end point success"
     })
})

module.exports = router